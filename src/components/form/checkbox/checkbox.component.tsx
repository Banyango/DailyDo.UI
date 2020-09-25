import React, {ReactElement, useCallback, useEffect, useMemo} from "react";
import {useFormContext} from "react-hook-form";
import classNames from "classnames";

import './checkbox.css';

import {ICheckboxProps} from "./checkbox.props";
import {FieldError} from "../field-error/field-error.component";
import {withError} from "../../../utils/error-utils";
import {FieldLabel} from "../field-label/field-label.component";

export function Checkbox<T extends boolean>(props: ICheckboxProps<T>): ReactElement {
    const {register, errors, formState, getValues, setValue} = useFormContext();
    useEffect(() => {
        setValue(props.field.name, props.field.value);
    }, [props.field.value]);

    return (
        <div className={classNames(props.className, "input_container")}>
            <FieldLabel label={props.label} name={props.field.name}/>
            <input
                id={props.field.name}
                className={withError({[props.classNameInner]:true,"checkbox__input":true},errors,props.field.name)}
                disabled={formState.isSubmitting}
                type={props.type}
                name={props.field.name}
                defaultChecked={props.field.defaultValue}
                ref={register()}
                onBlur={props.onBlur}
                onChange={() => props.onChange()}
            />
            <label id="checkbox" htmlFor={props.field.name}/>
            <FieldError name={props.field.name}/>
        </div>
    );
}
