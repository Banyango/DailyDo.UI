import { connect } from "react-redux";
import { ResetPasswordComponent } from "./reset-password.component";
import { IStore } from "../../../store/store";
import { IResetPasswordStateProps } from "./reset-password.props";

const mapStateToProps = (state: IStore): IResetPasswordStateProps => {
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token");
  return {
    token,
  };
};

export const ResetPasswordContainer = connect(mapStateToProps)(
  ResetPasswordComponent
);
