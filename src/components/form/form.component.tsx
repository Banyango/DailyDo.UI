import React, {ReactElement, useCallback, useRef} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {IFormProps} from "./form.props";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers";

import './form.css';

export function Form<T extends Record<string, any>>(
    props: React.PropsWithChildren<IFormProps<T>>
): ReactElement {
    const schema = yup.object().shape({
        ...props.schema,
    });
    const methods = useForm({resolver: yupResolver(schema)});
    const formState = {...methods.formState, isSubmitting: props.isSubmitting};
    return (
        <FormProvider {...methods} formState={formState}>
            <form
                className={props.className}
                onSubmit={methods.handleSubmit<T>(props.onSubmit)}>
                {props.error && <div className="form_error">{props.error}</div>}
                {props.children}
            </form>
        </FormProvider>
    );
}
