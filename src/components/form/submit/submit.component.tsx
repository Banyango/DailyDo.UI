import React from "react";
import { ISubmitProps } from "./submit.props";
import classNames from 'classnames';

import './submit.css';

export const Submit: React.FC<ISubmitProps> = (props) => {
  return <input className={classNames(props.className, "submit_button")} value={props.label || "Submit"} type="submit" />;
};
