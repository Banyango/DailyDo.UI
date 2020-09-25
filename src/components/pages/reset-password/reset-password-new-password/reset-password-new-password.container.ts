import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { ResetPasswordNewPasswordComponent } from "./reset-password-new-password.component";
import { IStore } from "../../../../store/store";
import { UserActions } from "../../../../store/user/user.actions";
import { createFormField } from "../../../form/form.props";
import * as yup from "yup";
import {
  IResetPasswordNewPasswordPageDispatchProps,
  IResetPasswordNewPasswordPageOwnProps,
  IResetPasswordNewPasswordStateProps,
} from "./reset-password-new-password.props";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: IResetPasswordNewPasswordPageOwnProps
): IResetPasswordNewPasswordPageDispatchProps => {
  return {
    onSubmit: (data) =>
      dispatch(
        UserActions.updatePassword(data.email, data.password, ownProps.token)
      ),
  };
};

const mapStateToProps = (
  state: IStore
): IResetPasswordNewPasswordStateProps => {
  return {
    initializing: false,
    submitting: state.user.resetPasswordPending,
    fields: {
      email: createFormField("email", "", "Email"),
      password: createFormField("password", "", "Password"),
      confirmPassword: createFormField(
        "confirmPassword",
        "",
        "Confirm Password"
      ),
    },
    validationSchema: {
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      confirmPassword: yup
        .string()
        .required()
        .equals([yup.ref("password")]),
    },
  };
};

export const ResetPasswordNewPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordNewPasswordComponent);
