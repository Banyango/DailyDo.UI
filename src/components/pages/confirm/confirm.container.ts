import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { IStore } from "../../../store/store";
import { UserActions } from "../../../store/user/user.actions";
import { ConfirmComponent } from "./confirm.component";
import { IConfirmDispatchProps, IConfirmStateProps } from "./confirm.props";
import { push } from "connected-react-router";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): IConfirmDispatchProps => {
  return {
    onInit: (token) => {
      if (token) {
        return dispatch(UserActions.checkConfirmToken(token));
      } else {
        return dispatch(push("/login"));
      }
    },
  };
};

const mapStateToProps = (state: IStore): IConfirmStateProps => {
  return {
    isConfirmed: state.user.confirmed,
    error: !!state.user.confirmError,
  };
};

export const ConfirmContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmComponent);
