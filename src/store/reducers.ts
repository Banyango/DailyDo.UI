import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { IStore } from "./store";
import { History } from "history";
import {todoReducer} from "./todos/todo.reducer";
import {dayReducer} from "./day/day.reducer";
import {userReducer} from "./user/user.reducer";
import {indexReducer} from "./index/index.reducer";

export function createRootReducer(history: History<History.LocationState>) {
  return combineReducers<IStore>({
    user: userReducer,
    index: indexReducer,
    todos: todoReducer,
    days: dayReducer,
    router: connectRouter(history),
  });
}
