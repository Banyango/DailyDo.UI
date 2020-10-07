import { IStore } from "../store";
import { userReducerActions } from "./user.reducer";
import { IndexSelectors } from "../index/index.selectors";
import { HttpAction } from "../../utils/request-utils";
import { Dispatch } from "redux";
import { User } from "../../rest/user/user";
import { push } from "connected-react-router";
import { AppRoutes } from "../../app/Routes";

type UserLoginParam = {
  email: string;
  password: string;
};

type UserRegisterParam = Omit<User, "id"> & { password: string };

type UserConfirmToken = {
  token: string;
};

type ResetPassword = {
  email: string;
};

type UpdatePassword = {
  email: string;
  password: string;
  token: string;
};

type GetMe = {

}

export class UserActions {
  static login(email: string, password: string) {
    return async (dispatch: Dispatch, getState: () => IStore) => {
      const link = IndexSelectors.getLogin(getState());
      if (!link) {
        return;
      }

      const action: HttpAction<User, UserLoginParam> = {
        type: "POST_LOGIN",
        meta: {
          type: "http",
          method: "post",
          href: link.href,
          onPending: userReducerActions.setLoginPending,
          onSuccess: userReducerActions.setUser,
          onFailure: userReducerActions.setLoginError,
          payload: {
            email,
            password,
          },
        },
      };

      await dispatch(action);

      if (!!getState().user.user) {
        return dispatch(push(AppRoutes.Home))
      }
    };
  }

  static register(
    lastName: string,
    firstName: string,
    username: string,
    confirmPassword: string,
    password: string,
    email: string
  ) {
    return async (dispatch: Dispatch, getState: () => IStore) => {
      const link = IndexSelectors.getRegister(getState());
      if (!link) {
        return;
      }

      const action: HttpAction<User, UserRegisterParam> = {
        type: "POST_REGISTER",
        meta: {
          type: "http",
          method: "post",
          href: link.href,
          onPending: userReducerActions.setRegistrationPending,
          onSuccess: userReducerActions.setUser,
          onFailure: userReducerActions.setRegisterError,
          payload: {
            lastName,
            firstName,
            username,
            password,
            email,
          },
        },
      };

      await dispatch(action);
      return dispatch(push(AppRoutes.CheckEmail));
    };
  }

  static checkConfirmToken(token: string) {
    return async (dispatch: Dispatch, getState: () => IStore) => {
      const link = IndexSelectors.getConfirmAccountLink(getState());
      if (!link) {
        return;
      }

      const action: HttpAction<boolean, UserConfirmToken> = {
        type: "POST_CONFIRM_TOKEN",
        meta: {
          type: "http",
          method: "post",
          href: link.href,
          onPending: userReducerActions.setConfirmPending,
          onSuccess: userReducerActions.setConfirmed,
          onFailure: userReducerActions.setConfirmError,
          payload: {
            token,
          },
        },
      };

      return dispatch(action);
    };
  }

  static resetPassword(email: string) {
    return async (dispatch: Dispatch, getState: () => IStore) => {
      const link = IndexSelectors.getResetPasswordLink(getState());
      if (!link) {
        return;
      }

      const action: HttpAction<boolean, ResetPassword> = {
        type: "POST_RESET_PASSWORD",
        meta: {
          type: "http",
          method: "post",
          href: link.href,
          onPending: userReducerActions.setResetPasswordPending,
          onSuccess: userReducerActions.setResetPassword,
          onFailure: userReducerActions.setResetPasswordError,
          payload: {
            email,
          },
        },
      };

      return dispatch(action);
    };
  }

  static updatePassword(email: string, password: string, token: string) {
    return async (dispatch: Dispatch, getState: () => IStore) => {
      const link = IndexSelectors.getConfirmResetPasswordLink(getState());
      if (!link) {
        return;
      }

      const action: HttpAction<boolean, UpdatePassword> = {
        type: "POST_CONFIRM_UPDATE_PASSWORD",
        meta: {
          type: "http",
          method: "post",
          href: link.href,
          onPending: userReducerActions.setUpdatePasswordPending,
          onSuccess: () => push("/"),
          onFailure: userReducerActions.setUpdatePasswordError,
          payload: {
            email,
            password,
            token,
          },
        },
      };

      return dispatch(action);
    };
  }

  public static getMe() {
    return async (dispatch: Dispatch, getState: () => IStore) => {
      const link = IndexSelectors.getMe(getState());
      if (!link) {
        return;
      }

      const action: HttpAction<User, GetMe> = {
        type: "GET_ME",
        meta: {
          type: "http",
          method: "get",
          href: link.href,
          onPending: userReducerActions.setMePending,
          onSuccess: userReducerActions.setUser,
        },
      };

      return dispatch(action);
    }
  }

  static logout() {
    return async (dispatch: Dispatch, getState: () => IStore) => {
      const link = IndexSelectors.getLogout(getState());
      if (!link) {
        return;
      }

      const action: HttpAction = {
        type: "POST_LOGOUT",
        meta: {
          type: "http",
          method: "post",
          href: link.href
        }
      };

      await dispatch(action);

      await dispatch({
        type: "APP_RESET",
        payload: {}
      });

      return dispatch(push(AppRoutes.Login))
    };
  }
}
