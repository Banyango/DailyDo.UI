import React, { Component } from "react";
import { Form } from "../../../form/form.component";
import { Input } from "../../../form/input/input.component";
import { Submit } from "../../../form/submit/submit.component";
import {
  IResetPasswordEmailForm,
  IResetPasswordEmailPageProps, IResetPasswordEmailState,
} from "./reset-password-email.props";

export class ResetPasswordEmailComponent extends Component<
  IResetPasswordEmailPageProps,
    IResetPasswordEmailState
> {
  constructor(props:IResetPasswordEmailPageProps) {
    super(props);
    this.state = {
      submitted:false
    }
  }

  render() {
    const {
      validationSchema,
      error,
      submitting,
      fields,
    } = this.props;

    if (this.state.submitted) {
      return (<div>Password reset email sent. Check your email...</div>)
    }

    return (
      <Form<IResetPasswordEmailForm>
        onSubmit={this.onSubmit}
        schema={validationSchema}
        error={error}
        isSubmitting={submitting}>
        <div className="reset_input">
          <Input label="Email" type="text" field={fields.email} />
          <Submit />
        </div>
      </Form>
    );
  }

  private onSubmit = (data) => {
    this.setState({submitted:true});
    this.props.onSubmit(data);
  }
}
