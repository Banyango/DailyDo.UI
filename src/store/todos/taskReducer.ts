import {Task} from "../../state/task";
import {createActionCreators, createReducerFunction, ImmerReducer} from "immer-reducer";
import {ArrayUtils} from "../../utils/array-utils";
import {IPaginated} from "../../rest/paginated";
import {ICollection} from "../../rest/collection";
import {TasksByDay} from "../../rest/day/tasks-by-day";

export interface ITaskStore {
    task: { [key: string]: Task[] };
    pending: { [key: string]: boolean };
}

const initialState: ITaskStore = {
    task: {"": []},
    pending: {},
};

export class TaskReducer extends ImmerReducer<ITaskStore> {
    addTask(task: Task) {
        if (!this.draftState.task[task.parent]) {
            this.draftState.task[task.parent] = [];
        }

        if (this.draftState.task[task.parent].find(t => t.id === task.id)) {
            this.setTask(task);
        } else {
            this.draftState.task[task.parent].push(task);
        }
    }

    setPending(pending: boolean, id: string) {
        this.draftState.pending[id] = pending;
    }

    addTasks(tasks: ICollection<Task>) {
        for (let i = 0; i < tasks.items.length; i++) {
            this.addTask(tasks.items[i]);
        }
    }

    addAllTasksForDay(response: TasksByDay) {
        for (let i = 0; i < response.tasks.length; i++) {
            const taskResponse = response.tasks[i];

            this.addTask(taskResponse?.task);

            for (let j = 0; j < taskResponse?.children?.length; j++) {
                this.addTask(taskResponse.children[j]);
            }
        }
    }

    setTask(task: Task) {
        const index = this.draftState.task[task.parent]
            .findIndex(t => t.id == task.id);

        this.draftState.task[task.parent][index] = task;
    }

    removeTask(parent: string, key:string) {
        this.draftState.task[parent] =
            this.draftState.task[parent]
                .filter(t => t.id !== key);

        if (this.draftState.task[parent].length === 0) {
            delete this.draftState.task[parent];
        }
    }

    reorderTasks(parent: string, key: string, source: number, destination: number) {
        this.draftState.task[parent] = ArrayUtils.move(this.draftState.task[parent], source, destination);
    }

    disposeTask(id: string) {
        delete this.draftState.task[id];
    }
}

export const todoReducerActions = createActionCreators(TaskReducer);
export const todoReducer = createReducerFunction(TaskReducer, initialState);