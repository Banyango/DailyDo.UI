import React, {ReactElement, useCallback, useEffect, useMemo} from "react";
import {IInputProps} from "./input.props";
import {useFormContext} from "react-hook-form";
import classNames from "classnames";

import './input.css';
import {withError} from "../../../utils/error-utils";
import {FieldLabel} from "../field-label/field-label.component";
import {FieldError} from "../field-error/field-error.component";

export function Input<T>(props: IInputProps<T>): ReactElement {
    const {register, errors, formState, setValue} = useFormContext();
    useEffect(()=> {
        setValue(props.field.name, props.field.value)
    }, []);

    useEffect(()=> {
        setValue(props.field.name, props.field.value)
    }, [props.field.value]);
    return (
        <div className={classNames(props.className)}>
            <FieldLabel label={props.label} name={props.field.name}/>
            <input
                autoFocus
                className={withError({[props.classNameInner]:true},errors,props.field.name)}
                disabled={formState.isSubmitting || props.disabled}
                type={props.type}
                tabIndex={props.tabIndex || 0}
                name={props.field.name}
                defaultValue={props.field.defaultValue?.toString()}
                ref={register()}
                placeholder={props.field.placeholder}
                onBlur={props.onBlur}
                onChange={()=> props.onChange && props.onChange()}
                autoComplete="off"
                onKeyDown={props.onKeyDown}
            />
            <FieldError name={props.field.name}/>
        </div>
    );
}
