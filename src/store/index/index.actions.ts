import { Dispatch } from "redux";
import { indexReducerActions } from "./index.reducer";
import { IStore } from "../store";
import { httpAction, HttpAction } from "../../utils/request-utils";
import { IIndexResource } from "../../rest/index/index.type";

export class IndexActions {
  static index() {
    return async (dispatch: Dispatch, getState: () => IStore) => {
      dispatch(indexReducerActions.setPending(true));

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

      dispatch(action);
    };
  }
}
