import axios from "axios";
import { Dispatch, MiddlewareAPI } from "redux";
import { HttpAction } from "../utils/request-utils";

export const httpMiddleware = ({ dispatch }: MiddlewareAPI) => {
  return (next: Dispatch) => async (action: HttpAction) => {
    if (!action.meta || action.meta.type !== "http") {
      return next(action);
    }

    dispatch(await action.meta.onPending(true));

    axios
      .request({
        url: action.meta.href,
        data: action.meta?.payload,
        method: action.meta.method,
        withCredentials:true,
        validateStatus: action.meta?.validateStatus,
        headers: { ["Content-Type"]: "application/json" },
      })
      .then(async (response) => {
        dispatch(await action.meta.onPending(false));
        dispatch(await action.meta.onSuccess(response.data));
      })
      .catch(async (error) => {
        dispatch(await action.meta.onPending(false));

        if (action.meta.onFailure) {
          dispatch(await action.meta?.onFailure(error.response));
        }

        console.log(error);
      });
  };
};
