import * as React from "react";
import {useRef} from "react";
import {Form} from "../form/form.component";
import {Input} from "../form/input/input.component";
import {IFormDispatchProps, IFormStateProps} from "../form/form.props";
import {useDebounceCallback} from '@react-hook/debounce'
import {Checkbox} from "../form/checkbox/checkbox.component";

import './sub-task.css';
import classNames from "classnames";
import {Draggable} from "react-beautiful-dnd";

export interface ISubTaskProps extends ISubTaskDispatchProps, ISubTaskStateProps, ISubTaskOwnProps {
    /**
     * Emitted when a key is down.
     * @param event    The key event.
     */
    onKeyDown: (event) => void;
}

export interface ISubTaskOwnProps {
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

export interface ISubTaskDispatchProps
    extends IFormDispatchProps<ISubTaskForm> {

    /**
     * Emitted when user clicks delete.
     */
    onDelete: () => void;
}

export interface ISubTaskStateProps extends IFormStateProps<ISubTaskForm> {
    completed: boolean;
}

export interface ISubTaskForm {
    text: string;
    checked: boolean;
}

export const SubTaskComponent: React.FC<ISubTaskProps> = (props) => {
    const submit = useRef<HTMLInputElement>();
    const debouncedSearchTerm = useDebounceCallback(() => {
        submit.current?.click();
    }, 1500);
    return (
        <Draggable key={props.index} draggableId={props.index} index={props.order}>
            {(provided) => (
                <div ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}>
                    <Form<ISubTaskForm> className="subtask"
                                        onSubmit={props.onSubmit}
                                        schema={props.validationSchema}
                                        error={props.error}
                                        isSubmitting={props.submitting}>
                        <span className="grip"/>
                        <Checkbox className="subtask_button"
                                  classNameInner="button-inner"
                                  type="checkbox"
                                  field={props.fields.checked}
                                  onChange={debouncedSearchTerm}/>
                        <Input className="subtask_text"
                               classNameInner={classNames({"text-inner": true, completed: props.completed})}
                               type="text"
                               onKeyDown={props.onKeyDown}
                               field={props.fields.text}
                               onChange={debouncedSearchTerm}
                        />
                        <input ref={submit} type="submit" hidden/>
                        <button className="subtask_close-button" onClick={(e) => {
                            e.preventDefault();
                            props.onDelete();
                        }}>x
                        </button>
                    </Form>
                </div>
            )}
        </Draggable>
    )
};