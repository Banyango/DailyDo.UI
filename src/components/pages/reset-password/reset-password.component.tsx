import React, { Component, useEffect } from "react";
import { IResetPasswordPageProps } from "./reset-password.props";
import { ResetPasswordNewPasswordContainer } from "./reset-password-new-password/reset-password-new-password.container";
import { ResetPasswordEmailContainer } from "./reset-password-email/reset-password-email.container";
import { AppRoutes } from "../../../app/Routes";
import { Link } from "react-router-dom";

import './reset-password.css';
import {Navbar} from "../../navbar/Navbar";

// export class ResetPasswordComponent extends Component<IResetPasswordPageProps> {
//   render() {
//     const { token } = this.props;
//
//     return (
//       <div className="reset_container">
//         <h3 className="reset_header">Reset Password</h3>
//         {token ? (
//           <ResetPasswordNewPasswordContainer token={token} />
//         ) : (
//           <ResetPasswordEmailContainer />
//         )}
//         <Link to={AppRoutes.Login}>Login</Link>
//       </div>
//     );
//   }
// }

export class ResetPasswordComponent extends Component<IResetPasswordPageProps> {
  render() {
    const { token } = this.props;

    return (
      <div className="reset_container">
          At this time you can't reset your password. Contact an admin!
          <Navbar isLoggedIn={false}/>
      </div>
    );
  }
}
