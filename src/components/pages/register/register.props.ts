import { IFormDispatchProps, IFormStateProps } from "../../form/form.props";
import { IRegisterForm } from "./resgister.form";

export interface IRegisterProps
  extends IRegisterDispatchProps,
    IRegisterStateProps {}

export interface IRegisterDispatchProps
  extends IFormDispatchProps<IRegisterForm> {}

export interface IRegisterStateProps extends IFormStateProps<IRegisterForm> {
  /**
   * Registered user.
   */
  userId: string;
}
