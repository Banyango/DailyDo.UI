import React from 'react';
import classNames from "classnames";
import {useFormContext} from "react-hook-form";

export interface IFieldErrorsProps {
    name: string;
}

export const FieldError: React.FC<IFieldErrorsProps> = props => {
    const {errors} = useFormContext();
    return (
        <>
            {errors[props.name] && (
                <p className={classNames("error", "small")}>{errors[props.name].message}</p>
            )}
        </>
    )
}
