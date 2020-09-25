import { IStore } from "../store";
import { Link } from "../../rest/link";

export class IndexSelectors {
  public static getCategories(state: IStore): Link {
    return state.index.index?._links.categories;
  }

  public static getPosts(state: IStore): Link {
    return state.index.index?._links.posts;
  }

  static getLogin(state: IStore): Link {
    return state.index.index?._links.login;
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
}
