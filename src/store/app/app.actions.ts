import {IStore} from "../store";
import {IndexActions} from "../index/index.actions";
import {ThunkDispatch} from "redux-thunk";
import {UserActions} from "../user/user.actions";
import {DayActions} from "../day/day.actions";

export class AppActions {
  public static initApplication() {
    return async (dispatch: ThunkDispatch<{}, {}, any>, getState: () => IStore) => {
      await dispatch(IndexActions.index());
      await dispatch(UserActions.getMe());
      return dispatch(DayActions.getDays());
    };
  }
}
