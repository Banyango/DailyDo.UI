import React, { Component } from "react";
import { IConfirmProps } from "./confirm.props";
import { Redirect } from "react-router";

export class ConfirmComponent extends Component<IConfirmProps> {
  componentDidMount(): void {
    const query = new URLSearchParams(window.location.search);
    this.props.onInit(query.get("token"));
  }

  render() {
    const { error, isConfirmed } = this.props;
    if (isConfirmed) {
      return <Redirect to="/login" />;
    }

    if (error) {
      return <p>Error occurred!</p>;
    }

    return <p>...Confirming</p>;
  }
}
