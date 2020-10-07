import {
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createRootReducer } from "./reducers";
import { httpMiddleware } from "../middleware/http-middleware";
import {ITaskStore} from "./todos/taskReducer";
import {IDayStore} from "./day/day.reducer";
import {IUserStore} from "./user/user.reducer";
import {IIndexStore} from "./index/index.reducer";

export interface IStore {
  user: IUserStore,
  index: IIndexStore,
  todos: ITaskStore,
  days: IDayStore,
  router: any;
}


export default function configureStore(history: any) {
  const composeEnhancers: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const appReducer = createRootReducer(history);
  const rootReducer = (state, action) => {
    if (action.type === 'APP_RESET') {
      const {router, index} = state;
      state = {router, index};
    }
    return appReducer(state,action)
  };

  return createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(...[thunk, routerMiddleware(history), httpMiddleware])
    )
  );
}
