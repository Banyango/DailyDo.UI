import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";
import {IStore} from "../../../store/store";
import {UserActions} from "../../../store/user/user.actions";
import {createFormField} from "../../form/form.props";
import * as yup from "yup";
import {IRegisterDispatchProps, IRegisterStateProps} from "./register.props";
import {RegisterComponent} from "./register.component";

const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, any>
): IRegisterDispatchProps => {
  return {
    onSubmit: (data) =>
        dispatch(
            UserActions.register(
                data.lastName,
                data.firstName,
                data.username,
                data.confirmPassword,
                data.password,
                data.email
            )
        ),
  };
};

const mapStateToProps = (state: IStore): IRegisterStateProps => {
  return {
    error: state.user.registerError,
    userId: state.user.user?.id,
    initializing: false,
    submitting: state.user.registrationPending,
    fields: {
      email: createFormField("email", ""),
      password: createFormField("password", ""),
      username: createFormField("username", ""),
      lastName: createFormField("lastName", ""),
      firstName: createFormField("firstName", ""),
      confirmPassword: createFormField(
          "confirmPassword",
          ""),
    },
    validationSchema: {
      confirmPassword: yup
          .string()
          .required()
          .equals([yup.ref("password")]),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      username: yup.string().required(),
      firstName: yup.string().notRequired(),
      lastName: yup.string().notRequired(),
    },
  };
};

export const RegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterComponent);
