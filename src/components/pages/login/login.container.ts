import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { LoginComponent } from "./login.component";
import { IStore } from "../../../store/store";
import { ILoginPageDispatchProps, ILoginStateProps } from "./login.types";
import { UserActions } from "../../../store/user/user.actions";
import { createFormField } from "../../form/form.props";
import * as yup from "yup";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): ILoginPageDispatchProps => {
  return {
    onSubmit: (data) => dispatch(UserActions.login(data.email, data.password)),
  };
};

const mapStateToProps = (state: IStore): ILoginStateProps => {
  return {
    error: state.user.loginError,
    initializing: false,
    submitting: state.user.loginPending,
    fields: {
      password: createFormField("password", ""),
      email: createFormField("email", ""),
    },
    isLoggedIn: !!state.user.user,
    validationSchema: {
      email: yup.string().required().email(),
      password: yup.string().required(),
    },
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
