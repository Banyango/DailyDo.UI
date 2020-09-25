import React from 'react';
import {withError} from "../../../utils/error-utils";
import {useFormContext} from "react-hook-form";

export interface IFieldLabelProps {
    label?:string;
    name:string;
}

export const FieldLabel : React.FC<IFieldLabelProps> = props => {
    const {errors} = useFormContext();
    return (
        <>
            {props.label && <p className={withError("input_label", errors, props.name)}>{props.label}</p>}
        </>
    )
}