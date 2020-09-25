import {Todo} from "../../state/todo";
import {DropResult} from "react-beautiful-dnd";

export interface ITodoListProps extends ITodoListStateProps, ITodoListDispatchProps, ITodoListOwnProps {
    /**
     * Indentation.
     */
    indentation: number;
}

export interface ITodoListOwnProps {
    parent:string;
}

export interface ITodoListStateProps  {
    /**
     * Todos
     */
    todos: Todo[];
}

export interface ITodoListDispatchProps {
    /**
     * Emitted when a component reorders todos
     *
     * @param key
     * @param result
     */
    onReorderTodo:(key:string, result:DropResult) => void;

    /**
     * Emitted when a component reorders subtasks
     *
     * @param key
     * @param result
     */
    onReorderSubTask:(parent:string, key:string, result:DropResult) => void;

    /**
     * Emitted on add todo.
     */
    onAddTodo: () => void;
}
