import {TodoSelectors} from "../components/todo/todo.selectors";
import {IStore} from "../store/store";
import {Dispatch} from "redux";

export class ExportUtils {
    public static export(){
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            let output = "";

            const state = getState();

            Object.keys(state.todos.todos).forEach((key:string) => {

                [...state.todos.todos[key]].sort((a, b) => a.order < b.order ? -1 : 1).forEach(e => {
                    output = output.concat(`[${e.complete?'x':''}] ${e.task} \n`)

                    if(state.todos.todos[e.key]) {
                        [...state.todos.todos[e.key]].sort((a, b) => a.order < b.order ? -1 : 1).forEach(e => {
                            output = output.concat(`[${e.complete?'x':''}]   ${e.task}\n`);
                        })
                    }
                })
            });

            document.oncopy = function(event) {
                event.clipboardData.setData("Text", output);
                event.preventDefault();
            };
            document.execCommand("Copy");
            document.oncopy = undefined;
        }
    }
}