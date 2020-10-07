import {Task} from "../../state/task";
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
    todos: Task[];

    /**
     * True if task is loading; false otherwise
     */
    loading: boolean;
}

export interface ITodoListDispatchProps {

    /***
     * Emitted when component loaded.
     */
    onInit: () => void;

    /**
     * Emitted when a component reorders task
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

    /**
     * Emitted when component unmounts.
     */
    onDispose: () => void;
}
