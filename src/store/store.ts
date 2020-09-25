import {
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createRootReducer } from "./reducers";
import { httpMiddleware } from "../middleware/http-middleware";
import {ITodoStore} from "./todos/todo.reducer";
import {IDayStore} from "./day/day.reducer";
import {IUserStore} from "./user/user.reducer";
import {IIndexStore} from "./index/index.reducer";

export interface IStore {
  user: IUserStore,
  index: IIndexStore,
  todos: ITodoStore,
  days: IDayStore,
  router: any;
}

export default function configureStore(history: any) {
  const composeEnhancers: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    createRootReducer(history),
    {},
    composeEnhancers(
      applyMiddleware(...[thunk, routerMiddleware(history), httpMiddleware])
    )
  );
}
