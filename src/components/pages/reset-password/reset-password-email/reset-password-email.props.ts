import { IFormDispatchProps, IFormStateProps } from "../../../form/form.props";

export interface IResetPasswordEmailPageProps
  extends IResetPasswordEmailPageDispatchProps,
    IResetPasswordEmailStateProps {}

export interface IResetPasswordEmailPageDispatchProps
  extends IFormDispatchProps<IResetPasswordEmailForm> {}

export interface IResetPasswordEmailStateProps
  extends IFormStateProps<IResetPasswordEmailForm> {
}

export interface IResetPasswordEmailForm {
  /**
   * Email field.
   */
  email: string;
}

export interface IResetPasswordEmailState {

  /**
   * True if form was submitted; false otherwise.
   */
  submitted:boolean;

}