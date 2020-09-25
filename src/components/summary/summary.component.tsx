import React, {useRef} from 'react';
import {Form} from "../form/form.component";
import {Draggable} from "react-beautiful-dnd";
import {TextFieldComponent} from "../form/text-field/text-field.component";
import {useDebounceCallback} from "@react-hook/debounce";
import {IFormDispatchProps, IFormStateProps} from "../form/form.props";

export interface ISummaryProps extends ISummaryDispatchProps, ISummaryStateProps, ISummaryOwnProps {

}

export interface ISummaryOwnProps {
    /**
     * Key index.
     */
    index: string;

    /**
     * Order.
     */
    order: number;

    /**
     * Parent id.
     */
    parent: string;
}

export interface ISummaryDispatchProps extends IFormDispatchProps<ISummaryForm> {

    /**
     * Emitted when user clicks delete.
     */
    onDelete: () => void;
}

export interface ISummaryStateProps extends IFormStateProps<ISummaryForm> {

}

export interface ISummaryForm {
    text: string;
}

export const SummaryComponent: React.FC<ISummaryProps> = (props) => {
    const submit = useRef<HTMLInputElement>();
    const debouncedSearchTerm = useDebounceCallback(() => {
        submit.current?.click();
    }, 250);
    return (
        <Draggable key={props.index} draggableId={props.index} index={props.order}>
            {(provided) => (
                <div ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}>
                    <Form<ISummaryForm> className="subtask"
                                        onSubmit={props.onSubmit}
                                        schema={props.validationSchema}
                                        error={props.error}
                                        isSubmitting={props.submitting}>
                        <span className="grip"/>
                        <input ref={submit} type="submit" hidden/>
                        <TextFieldComponent className="text" field={props.fields.text} onChange={debouncedSearchTerm}/>
                        <button className="subtask_close-button" onClick={props.onDelete}>x</button>
                    </Form>
                </div>
            )}
        </Draggable>
    )
};