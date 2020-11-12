import {Task} from "../../state/task";

export type TasksByDay = {
    tasks: SubTasksByDay[];
}

export type SubTasksByDay = {
    /**
     * Task for the day.
     */
    task: Task;

    /**
     * All child tasks of this task.
     */
    children: Task[];
}