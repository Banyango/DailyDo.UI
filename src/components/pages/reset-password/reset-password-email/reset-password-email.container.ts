import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { ResetPasswordEmailComponent } from "./reset-password-email.component";
import { IStore } from "../../../../store/store";
import { UserActions } from "../../../../store/user/user.actions";
import { createFormField } from "../../../form/form.props";
import * as yup from "yup";
import {
  IResetPasswordEmailPageDispatchProps,
  IResetPasswordEmailStateProps,
} from "./reset-password-email.props";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): IResetPasswordEmailPageDispatchProps => {
  return {
    onSubmit: (data) => dispatch(UserActions.resetPassword(data.email)),
  };
};

const mapStateToProps = (state: IStore): IResetPasswordEmailStateProps => {
  return {
    initializing: false,
    submitting: state.user.resetPasswordPending,
    fields: {
      email: createFormField("email", ""),
    },
    validationSchema: {
      email: yup.string().required().email(),
    },
  };
};

export const ResetPasswordEmailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordEmailComponent);
