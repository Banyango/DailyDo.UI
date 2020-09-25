import {Dispatch} from "redux";
import {IStore} from "../store";
import {todoReducerActions} from "./todo.reducer";
import { v4 as uuidv4 } from 'uuid';

export class TodoActions {
    static addTodo(parent: string) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            dispatch(todoReducerActions.addTodo(parent, {
                type:'todo',
                key: uuidv4(),
                complete:false,
                task:""
            }))
        }
    }

    static addSubtask(parent: string) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            dispatch(todoReducerActions.addTodo(parent, {
                type:'subtask',
                key: uuidv4(),
                complete:false,
                task:""
            }))
        }
    }

    static addSummary(parent: string) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            dispatch(todoReducerActions.addTodo(parent, {
                type:'summary',
                key: uuidv4(),
                complete:false,
                task:""
            }))
        }
    }

    static updateTodo(parent:string, key: string, checked:boolean, text: string) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            dispatch(todoReducerActions.updateTodo(parent, key, checked, text));
        }
    }

    static updateSummary(parent:string, key: string, text: string) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            dispatch(todoReducerActions.updateText(parent, key, text));
        }
    }

    static deleteTodo(parent: string, key: string) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            dispatch(todoReducerActions.removeTodo(parent, key));
        }
    }

    static reorderTodo(parent:string, key: string, source:number, destination:number) {
        return async (dispatch:Dispatch, getState:()=> IStore) => {
            dispatch(todoReducerActions.reorderTodos(parent, key, source, destination));
        }
    }
}