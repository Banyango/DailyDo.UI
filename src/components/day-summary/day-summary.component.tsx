import * as React from "react";
import {useRef} from "react";
import {IDaySummaryForm, IDaySummaryProps} from "./day-summary.types";
import {TextFieldComponent} from "../form/text-field/text-field.component";
import {useDebounceCallback} from "@react-hook/debounce";
import {Form} from "../form/form.component";

import "./day-summary.css";
import {SectionHeader} from "../section-header/section-header.component";

export const DaySummaryComponent: React.FC<IDaySummaryProps> = (props) => {
    const submit = useRef<HTMLInputElement>();
    const debouncedSearchTerm = useDebounceCallback(() => {
        submit.current?.click();
    }, 500);
    return (
        <Form<IDaySummaryForm> className="day-summary__form" onSubmit={props.onSubmit}
                               schema={props.validationSchema}
                               error={props.error}
                               isSubmitting={props.submitting}>
            <SectionHeader header="Summary"/>
            <TextFieldComponent className="day-summary__text_field"
                                menuButtonClassName="day-summary__menu_button"
                                field={props.fields.summary}
                                onChange={debouncedSearchTerm}/>
            <input ref={submit} type="submit" hidden aria-hidden/>
        </Form>
    )
};