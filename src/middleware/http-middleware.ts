import axios from "axios";
import {Dispatch, MiddlewareAPI} from "redux";
import {HttpAction} from "../utils/request-utils";
import Cookies from "js-cookie";

export const httpMiddleware = ({dispatch}: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: HttpAction) => {
        if (!action.meta || action.meta.type !== "http") {
            return next(action);
        }

        if (action.meta.onPending) {
            await dispatch(action.meta.onPending(true));
        }

        await axios
            .request({
                url: action.meta.href,
                data: action.meta?.payload,
                method: action.meta.method,
                withCredentials: true,
                validateStatus: action.meta?.validateStatus,
                headers: {
                    ["Content-Type"]: "application/json",
                },
            })
            .then(async (response) => {
                if(action.meta.onPending) {
                    await dispatch(action.meta.onPending(false));
                }
                await dispatch(action.meta.onSuccess(response.data));
            })
            .catch(async (error) => {
                if(action.meta.onPending) {
                    await dispatch(action.meta.onPending(false));
                }

                if (action.meta.onFailure) {
                    await dispatch(action.meta?.onFailure(error.response));
                }
            });
    };
};
