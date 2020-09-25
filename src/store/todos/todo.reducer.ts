import {Todo} from "../../state/todo";
import {createActionCreators, createReducerFunction, ImmerReducer} from "immer-reducer";
import {ArrayUtils} from "../../utils/array-utils";

export interface ITodoStore {
    todos: { [key: string]: Todo[] };
}

const initialState: ITodoStore = {
    todos: {"": []},
};

export class TodoReducer extends ImmerReducer<ITodoStore> {
    addTodo(parent: string, todo: Todo) {
        if (!this.draftState.todos[parent]) {
            this.draftState.todos[parent] = [];
        }
        this.draftState.todos[parent].push(todo);
    }

    updateTodo(parent: string, key: string, checked: boolean, text: string) {
        const index = this.draftState.todos[parent].findIndex(t => t.key === key);

        if (index > -1) {
            this.draftState.todos[parent][index].task = text;
            this.draftState.todos[parent][index].complete = checked;
        }

        if (this.draftState.todos[key] && checked) {
            this.draftState.todos[key].forEach(e => e.complete = true);
        }
    }

    updateText(parent: string, key: string, text: string) {
        const index = this.draftState.todos[parent].findIndex(t => t.key === key);

        if (index > -1) {
            this.draftState.todos[parent][index].task = text;
        }
    }

    reorderTodos(parent: string, key: string, source: number, destination: number) {
        this.draftState.todos[parent] = ArrayUtils.move(this.draftState.todos[parent], source, destination);
    }

    removeTodo(parent: string, key) {
        this.draftState.todos[parent] = this.draftState.todos[parent].filter(t => t.key !== key)

        if (this.draftState.todos[parent].length === 0) {
            delete this.draftState.todos[parent];
        }
    }
}

export const todoReducerActions = createActionCreators(TodoReducer);
export const todoReducer = createReducerFunction(TodoReducer, initialState);