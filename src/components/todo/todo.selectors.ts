import {Task} from "../../state/task";
import {IStore} from "../../store/store";

export class TodoSelectors {
    public static todo = (state:IStore, parent:string, key: string):Task  => {
        return state.todos.task[parent].find(e => e.id === key);
    };

    public static findChildren = (state:IStore, parent:string): Task[]  => {
        return state.todos.task[parent];
    };

}