import React from "react";
import {ILoginForm, ILoginPageProps} from "./login.types";
import {Input} from "../../form/input/input.component";
import {Submit} from "../../form/submit/submit.component";
import {Form} from "../../form/form.component";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../../app/Routes";

import "./login.css";

export const LoginComponent: React.FC<ILoginPageProps> = (props) => {
  return (
      <div className="login_container">
        <div className="login_text">
          <h3>DailyDo</h3>
          <p>Log in to get access to your daily dos.</p>
        </div>
        <Form<ILoginForm>
            onSubmit={props.onSubmit}
            schema={props.validationSchema}
            error={props.error}
            isSubmitting={props.submitting}
        >
          <div className="login_input">
            <Input
                label="Email"
                type="text"
                field={props.fields.email}/>
            <Input
                label="Password"
                type="password"
                field={props.fields.password}
            />
            <Submit className="login_submit"/>
            <Link className="login_link" to={AppRoutes.ResetPassword}>
              Reset Password
            </Link>
          </div>
        </Form>
      </div>
  );
};
