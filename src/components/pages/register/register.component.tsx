import React from "react";
import {IRegisterProps} from "./register.props";
import {Input} from "../../form/input/input.component";
import {Submit} from "../../form/submit/submit.component";
import {Form} from "../../form/form.component";
import {IRegisterForm} from "./resgister.form";

import "./register.css";

export const RegisterComponent: React.FC<IRegisterProps> = (props) => {
  return (
      <div className="register_container">
        <h3 className="register_header">Register for an account</h3>
        <Form<IRegisterForm>
            onSubmit={props.onSubmit}
            schema={props.validationSchema}
            error={props.error}
            isSubmitting={props.submitting}
        >
          <div className="register_input">
            <Input label="Email" type="text" field={props.fields.email}/>
            <Input label="Username" type="text" field={props.fields.username}/>
            <Input label="Password" type="password" field={props.fields.password}/>
            <Input label="Confirm Password" type="password" field={props.fields.confirmPassword}/>
            <Input label="First Name" type="text" field={props.fields.firstName}/>
            <Input label="Last Name" type="text" field={props.fields.lastName}/>
            <Submit label="Register"/>
          </div>
        </Form>
      </div>
  );
};
