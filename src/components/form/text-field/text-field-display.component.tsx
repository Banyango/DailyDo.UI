import {ITextFieldProps} from "./text-field.props";
import React from "react";

export const TextFieldDisplayComponent = (props:ITextFieldProps<string>) => {
    return <div dangerouslySetInnerHTML={
        {__html:props.field.value}
    }/>;
};