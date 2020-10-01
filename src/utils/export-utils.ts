import {IStore} from "../store/store";
import {Dispatch} from "redux";

export class ExportUtils {
    public static export(){
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            let output = "";

            const state = getState();

            Object.keys(state.todos.task).forEach((key:string) => {

                [...state.todos.task[key]].sort((a, b) => a.order < b.order ? -1 : 1).forEach(e => {
                    output = output.concat(`[${e.completed?'x':''}] ${e.text} \n`);

                    if(state.todos.task[e.id]) {
                        [...state.todos.task[e.id]].sort((a, b) => a.order < b.order ? -1 : 1).forEach(e => {
                            output = output.concat(`[${e.completed?'x':''}]   ${e.text}\n`);
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