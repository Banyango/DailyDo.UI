import { IFormDispatchProps, IFormStateProps } from "../../form/form.props";

export interface ILoginPageProps
  extends ILoginPageDispatchProps,
    ILoginStateProps {}

export interface ILoginPageDispatchProps
  extends IFormDispatchProps<ILoginForm> {}

export interface ILoginStateProps extends IFormStateProps<ILoginForm> {

  /**
   * True if user is loged in; false otherwise.
   */
  isLoggedIn:boolean;
}

export interface ILoginForm {
  /**
   * Email field.
   */
  email: string;

  /**
   * Password field.
   */
  password: string;
}
