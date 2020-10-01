import {Task} from "../../state/task";
import {IStore} from "../../store/store";

export class TodoSelectors {
    public static todo = (state:IStore, parent:string, key: string):Task  => {
        return state.todos.task[parent].find(e => e.id === key);
    };

    public static findParent = (state:IStore, parent:string): Task  => {
        const ts1 = Object.values(state.todos.task).filter(e => e.find(c => c.id === parent));
        return ts1[0][0];
    };
}