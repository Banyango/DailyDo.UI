import {Dispatch} from "redux";
import {IStore} from "../store";
import {todoReducerActions} from "./taskReducer";
import {HttpAction} from "../../utils/request-utils";
import {Task} from "../../state/task";
import {ICollection} from "../../rest/collection";

export class TodoActions {

    static getTasks(parent: string) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            const link = getState().index.index._links.tasks;
            if (!link) {
                return;
            }

            const action: HttpAction<ICollection<Task>> = {
                type: "GET_TASK",
                meta: {
                    id: parent,
                    type: "http",
                    method: "get",
                    href: `${link.href}/${parent}/tasks`,
                    onPending: todoReducerActions.setPending,
                    onSuccess: todoReducerActions.addTasks
                },
            };

            return dispatch(action);
        }
    }

    static getItems(parent: string) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            const link = getState().index.index._links.tasks;
            if (!link) {
                return;
            }

            const action: HttpAction<ICollection<Task>> = {
                type: "GET_ITEMS",
                meta: {
                    id: parent,
                    type: "http",
                    method: "get",
                    href: `${link.href}/${parent}/items`,
                    onPending: todoReducerActions.setPending,
                    onSuccess: todoReducerActions.addTasks
                },
            };

            return dispatch(action);
        }
    }

    static addTodo(parent: string) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            const link = getState().index.index._links.tasks;
            if (!link) {
                return;
            }

            const action: HttpAction<Task, Pick<Task, 'parent' | 'text' | 'completed' | 'order'>> = {
                type: "POST_TASK",
                meta: {
                    type: "http",
                    method: "post",
                    href: link.href,
                    onSuccess: todoReducerActions.addTask,
                    payload: {
                        parent:parent,
                        text:"",
                        completed:false,
                        order:0,
                    }
                },
            };

            return dispatch(action);
        }
    }

    // todo this task should have the link to create subtasks.
    static addSubtask(id: string) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            const link = getState().index.index._links.tasks;
            if (!link) {
                return;
            }

            const action: HttpAction<Task,Pick<Task, 'parent' | 'text' | 'completed' | 'order'>> = {
                type: "POST_SUBTASK",
                meta: {
                    type: "http",
                    method: "post",
                    href: `${link.href}/${id}/subtasks`,
                    onSuccess: todoReducerActions.addTask,
                    payload: {
                        parent:id,
                        text:"",
                        completed:false,
                        order:0,
                    }
                },
            };

            return dispatch(action);
        }
    }

    static addSummary(id: string) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            const link = getState().index.index._links.tasks;
            if (!link) {
                return;
            }

            const action: HttpAction<Task, Pick<Task, 'parent' | 'text' | 'completed' | 'order'>> = {
                type: "POST_SUMMARY",
                meta: {
                    type: "http",
                    method: "post",
                    href: `${link.href}/${id}/summaries`,
                    onSuccess: todoReducerActions.addTask,
                    payload: {
                        parent:id,
                        text:"",
                        completed:false,
                        order:0,
                    }
                },
            };

            return dispatch(action);
        }
    }

    static updateTodo(parent: string, id: string, text: string, completed?: boolean) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            const link = getState().index.index._links.tasks;
            if (!link) {
                return;
            }

            const action: HttpAction<Task, Pick<Task, "parent" | "id" | "completed" | "text">> = {
                type: "PUT_TASK",
                meta: {
                    type: "http",
                    method: "put",
                    href: `${link.href}/${id}`,
                    onSuccess: todoReducerActions.setTask,
                    payload: {
                        id,
                        parent,
                        completed,
                        text
                    }
                },
            };

            return dispatch(action);
        }
    }

    static deleteTodo(parent: string, id: string) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            const link = getState().index.index._links.tasks;
            if (!link) {
                return;
            }

            const action: HttpAction<void, Pick<Task, "parent" | "id" | "completed" | "text">> = {
                type: "DELETE_TASK",
                meta: {
                    type: "http",
                    method: "delete",
                    href: `${link.href}/${id}`,
                    onSuccess: () => todoReducerActions.removeTask(parent, id),
                },
            };

            return dispatch(action);
        }
    }


    static disposeTask(id: string) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            return dispatch(todoReducerActions.disposeTask(id));
        }
    }

    static reorderTodo(parent: string, key: string, source: number, destination: number) {
        return async (dispatch: Dispatch, getState: () => IStore) => {
            // todo change order on the BE
            // dispatch(todoReducerActions.reorderTodos(parent, key, source, destination));
        }
    }
}