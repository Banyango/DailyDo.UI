import React from "react";
import {ILoginForm, ILoginPageProps} from "./login.types";
import {Input} from "../../form/input/input.component";
import {Submit} from "../../form/submit/submit.component";
import {Form} from "../../form/form.component";
import {Link, Redirect} from "react-router-dom";
import {AppRoutes} from "../../../app/Routes";

import "./login.css";

export const LoginComponent: React.FC<ILoginPageProps> = (props) => {

    if(props.isLoggedIn) {
        return <Redirect to={AppRoutes.Home}/>
    }

    return (
        <div className="login__container">
            <div className="login__text">
                <h3>DailyDo</h3>
                <p>Log in to get access to your daily dos.</p>
            </div>
            <Form<ILoginForm>
                onSubmit={props.onSubmit}
                schema={props.validationSchema}
                error={props.error}
                isSubmitting={props.submitting}
            >
                <div className="login__input">
                    <Input
                        classNameInner="login__input_text"
                        label="Email"
                        type="text"
                        field={props.fields.email}/>
                    <Input
                        classNameInner="login__input_text"
                        label="Password"
                        type="password"
                        field={props.fields.password}
                    />
                    <Submit className="login__submit"/>
                    <div className="login__links">
                        <Link className="login__link" to={AppRoutes.Register}>
                            Register
                        </Link>
                        <Link className="login__link" to={AppRoutes.ResetPassword}>
                            Reset Password
                        </Link>
                    </div>
                </div>
            </Form>
        </div>
    );
};
