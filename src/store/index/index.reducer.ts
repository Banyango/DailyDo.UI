import { IIndexResource } from "../../rest/index/index.type";
import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from "immer-reducer";

export interface IIndexStore {
  index: IIndexResource | undefined;
  pending: boolean;
  error: string;
}

const initialState: IIndexStore = {
  index: undefined,
  pending: false,
  error: "",
};

export class IndexReducer extends ImmerReducer<IIndexStore> {
  setIndex(indexResource: IIndexResource) {
    this.draftState.index = indexResource;
  }
  setPending(pending: boolean) {
    this.draftState.pending = pending;
  }
  setError(e: Error) {
    this.draftState.error = e.message;
  }
}

export const indexReducerActions = createActionCreators(IndexReducer);
export const indexReducer = createReducerFunction(IndexReducer, initialState);
