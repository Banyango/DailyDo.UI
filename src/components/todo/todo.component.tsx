import * as React from "react";
import {useEffect, useRef} from "react";
import {Form} from "../form/form.component";
import {Input} from "../form/input/input.component";
import {IFormDispatchProps, IFormStateProps} from "../form/form.props";
import {useDebounceCallback} from '@react-hook/debounce'
import {Checkbox} from "../form/checkbox/checkbox.component";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {SubTaskContainer} from "../sub-task/sub-task.container";
import classNames from "classnames";

import './todo.css';
import {Task} from "../../state/task";
import {DropdownButton} from "../dropdown-button/dropdown.button";
import {SummaryContainer} from "../summary/summary.container";

export interface ITodoProps extends ITodoPageDispatchProps, ITodoStateProps, ITodoOwnProps {
    /**
     * Indendation.
     */
    indentation: number;
}

export interface ITodoOwnProps {
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

export interface ITodoPageDispatchProps extends IFormDispatchProps<ITodoForm> {

    /**
     * Emitted when component mounts.
     */
    onInit: () => void;

    /**
     * Emitted when component unmounts.
     */
    onDispose: () => void;

    /**
     * Emitted when user clicks delete.
     */
    onDelete: () => void;

    /**
     * Emitted when sub task
     */
    onAddSubTask: () => void;

    /**
     * Emitted when add a summary
     */
    onAddSummary: () => void;

    /**
     * Emitted when enter pressed on sub task.
     * @param event    The event.
     */
    onEnterPressOnSubTask: (event) => void;
}

export interface ITodoStateProps extends IFormStateProps<ITodoForm> {
    /**
     * True if this is complete; false otherwise.
     */
    complete: boolean;

    /**
     * Sub task
     */
    todos: Task[];
}

export interface ITodoForm {
    text: string;
    checked: boolean;
}

export const TodoComponent: React.FC<ITodoProps> = (props) => {
    const submit = useRef<HTMLInputElement>();
    const debouncedSearchTerm = useDebounceCallback(() => {
        submit.current?.click();
    }, 1500);
    const contextButtons =[{
        key:'1',
        name:"Add Sub-Task",
        onClick: props.onAddSubTask
    }, {
        key:'2',
        name:"Add Note",
        onClick: props.onAddSummary
    }];
    useEffect(()=> {
        props.onInit();
    }, []);
    return (
        <Draggable key={props.index} draggableId={props.index} index={props.order}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div className="todo_container">
                        <Form<ITodoForm> className={classNames({todo: true, todo_contains: props.todos?.length > 0})}
                                         onSubmit={props.onSubmit}
                                         schema={props.validationSchema}
                                         error={props.error}
                                         isSubmitting={props.submitting}>
                            <span className="grip"/>
                            <Checkbox className="todo__button" classNameInner="todo__button-inner" type="checkbox"
                                      field={props.fields.checked} onChange={debouncedSearchTerm}/>
                            <Input className="text"
                                   classNameInner={classNames({"text-inner": true, completed: props.complete})}
                                   type="text" field={props.fields.text} onChange={debouncedSearchTerm}/>
                            <input ref={submit} type="submit" hidden/>
                            <DropdownButton buttons={contextButtons} />
                            <button className="todo__close-button" onClick={(e)=> {
                                e.preventDefault();
                                props.onDelete();
                            }}>x</button>
                        </Form>
                        <Droppable
                            droppableId={props.index}
                            type="SUB_TASK">
                            {provided => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                    {
                                        props.todos?.map((item, index) => {
                                            if(item.type === 'SubTask') {
                                                return (
                                                    <SubTaskContainer parent={item.parent} key={item.id} index={item.id}
                                                                      order={index} onKeyDown={props.onEnterPressOnSubTask}/>
                                                )
                                            } else {
                                                return (
                                                    <SummaryContainer parent={item.parent} key={item.id} index={item.id}
                                                                      order={index}/>
                                                )
                                            }
                                        }
                                        )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            )}
        </Draggable>
    )
};