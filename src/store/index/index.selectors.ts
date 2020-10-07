import { IStore } from "../store";
import { Link } from "../../rest/link";

export class IndexSelectors {
  public static getTasks(state: IStore): Link {
    return state.index.index?._links.tasks;
  }

  static getLogin(state: IStore): Link {
    return state.index.index?._links.login;
  }

  static getLogout(state: IStore): Link {
    return state.index.index?._links.logout;
  }

  static getRegister(state: IStore): Link {
    return state.index.index?._links.register;
  }

  static getConfirmAccountLink(state: IStore): Link {
    return state.index.index?._links.confirm;
  }

  static getResetPasswordLink(state: IStore): Link {
    return state.index.index?._links.forgotPassword;
  }

  static getConfirmResetPasswordLink(state: IStore): Link {
    return state.index.index?._links.confirmResetPassword;
  }

  static getMe(state: IStore) {
    return state.index.index?._links.me;
  }
}
