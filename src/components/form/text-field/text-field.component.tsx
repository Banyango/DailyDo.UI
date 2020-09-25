import React, {useCallback, useState} from 'react';
import {ITextFieldProps} from "./text-field.props";

import 'react-quill/dist/quill.snow.css';
import {useFormContext} from "react-hook-form";
import classNames from "classnames";
import {TextFieldEditor} from "./text-field-editor.component";
import {TextFieldDisplayComponent} from "./text-field-display.component";
import {FieldError} from "../field-error/field-error.component";
import {MenuButton} from "../../menu-button/menu-button.component";

export const TextFieldComponent = (props: ITextFieldProps<string>) => {
    const {setValue, getValues, register} = useFormContext();
    const [edit, setEdit] = useState(false);

    useCallback(() => {
        setValue(props.field.name, props.field.defaultValue)
    }, [props.field.defaultValue]);

    return (
        <>
            <div className={classNames(props.className)}>
                {edit ? <TextFieldEditor {...props}/> : <TextFieldDisplayComponent {...props}/>}
                <FieldError name={props.field.name}/>
                <input ref={register()} name={props.field.name} hidden aria-hidden value={getValues(props.field.name)}/>
            </div>
            <MenuButton className={classNames(props.menuButtonClassName, "summary__button")} name={edit? "Submit": "Edit"} onClick={() => setEdit(!edit)} icon="edit"/>
        </>
    )
};