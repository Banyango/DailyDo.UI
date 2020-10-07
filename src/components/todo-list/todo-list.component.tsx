import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable, DroppableProvided, DropResult} from "react-beautiful-dnd";
import {TodoContainer} from "../todo/todo.container";
import {MenuButton} from "../menu-button/menu-button.component";
import {ITodoListProps} from "./todo-list.props";

import './todo-list.css';
import {SectionHeader} from "../section-header/section-header.component";

export class TodoListComponent extends Component<ITodoListProps> {
    constructor(props:ITodoListProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.onInit();
    }

    componentWillReceiveProps(nextProps: Readonly<ITodoListProps>, nextContext: any): void {
        if (nextProps.parent !== this.props.parent) {
            this.props.onInit();
        }

    }

    componentWillUnmount(): void {
        this.props.onDispose();
    }

    render(): React.ReactNode {
        const { onAddTodo, todos, parent, indentation } = this.props;

        const board = (
            <Droppable
                droppableId="board"
                type="COLUMN"
                direction="vertical">
                {(provided: DroppableProvided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {todos?.map((item, index) => (
                            <TodoContainer parent={parent} indentation={indentation} key={item.id} index={item.id} order={index}/>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );

        return (
            <>
                <SectionHeader header="Todo"/>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    {board}
                    <MenuButton className="menu_button_add" name="Add" icon="plus-circle" onClick={onAddTodo}>Add</MenuButton>
                </DragDropContext>
            </>
        )
    }

    private onDragEnd = (result:DropResult) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        if(result.type === "SUB_TASK") {
            this.props.onReorderSubTask(result.source.droppableId, result.draggableId, result)
        } else {
            this.props.onReorderTodo(result.draggableId, result);
        }
    }
}