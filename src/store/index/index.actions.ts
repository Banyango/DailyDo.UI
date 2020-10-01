import { Dispatch } from "redux";
import { indexReducerActions } from "./index.reducer";
import { IStore } from "../store";
import { httpAction, HttpAction } from "../../utils/request-utils";
import { IIndexResource } from "../../rest/index/index.type";
import {ThunkDispatch} from "redux-thunk";

export class IndexActions {
  public static index() {
    return (dispatch: ThunkDispatch<{}, {}, any>) => {
      const action: HttpAction<IIndexResource> = {
        type: "GET_INDEX",
        meta: {
          type: "http",
          method: "get",
          href: "/api/v1/index",
          onPending: indexReducerActions.setPending,
          onSuccess: indexReducerActions.setIndex,
          onFailure: indexReducerActions.setError,
        },
      };

      return dispatch(action);
    };
  }
}
