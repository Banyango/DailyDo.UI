import React, { Component } from "react";
import { Form } from "../../../form/form.component";
import { Input } from "../../../form/input/input.component";
import { Submit } from "../../../form/submit/submit.component";
import {
  IResetPasswordNewPasswordForm,
  IResetPasswordNewPasswordPageProps,
} from "./reset-password-new-password.props";

import "../reset-password.css";

export class ResetPasswordNewPasswordComponent extends Component<
  IResetPasswordNewPasswordPageProps
> {
  render() {
    const {
      onSubmit,
      validationSchema,
      error,
      submitting,
      fields,
    } = this.props;
    return (
      <Form<IResetPasswordNewPasswordForm>
        onSubmit={onSubmit}
        schema={validationSchema}
        error={error}
        isSubmitting={submitting}>
        <div className="reset_input">
          <Input label="Email" type="text" field={fields.email} />
          <Input label="Password" type="password" field={fields.password} />
          <Input label="Confirm Password" type="password" field={fields.confirmPassword} />
          <Submit />
        </div>
      </Form>
    );
  }
}
