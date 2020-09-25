import { IFormDispatchProps, IFormStateProps } from "../../../form/form.props";

export interface IResetPasswordNewPasswordPageProps
  extends IResetPasswordNewPasswordPageDispatchProps,
    IResetPasswordNewPasswordStateProps,
    IResetPasswordNewPasswordPageOwnProps {}

export interface IResetPasswordNewPasswordPageOwnProps {
  /**
   * Reset password token.
   */
  token: string;
}

export interface IResetPasswordNewPasswordPageDispatchProps
  extends IFormDispatchProps<IResetPasswordNewPasswordForm> {}

export interface IResetPasswordNewPasswordStateProps
  extends IFormStateProps<IResetPasswordNewPasswordForm> {

}

export interface IResetPasswordNewPasswordForm {
  /**
   * Email field.
   */
  email: string;

  /**
   * password field.
   */
  password: string;

  /**
   * confirm field.
   */
  confirmPassword: string;
}
