import {Todo} from "../../state/todo";
import {IStore} from "../../store/store";

export class TodoSelectors {
    public static todo = (state:IStore, parent:string, key: string):Todo  => {
        return state.todos.todos[parent].find(e => e.key === key);
    };

    public static findParent = (state:IStore, parent:string): Todo  => {
        const ts1 = Object.values(state.todos.todos).filter(e => e.find(c => c.key === parent));
        return ts1[0][0];
    };
}