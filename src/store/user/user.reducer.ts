import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from "immer-reducer";
import { User } from "../../rest/user/user";

export interface IUserStore {
  user: User;
  loginPending: boolean;
  loginError: string;
  registerError: string;
  registrationPending: boolean;
  mePending: boolean;
  resetPasswordPending: boolean;
  confirmPending: boolean;
  confirmed: boolean;
  confirmError: string;
  resetPassword: boolean;
  resetPasswordError: string;
  updatePasswordPending: boolean;
  updatePasswordError: string;
}

const initialState: IUserStore = {
  user: null,
  mePending: true,
  loginPending: false,
  loginError: "",
  registerError: "",
  registrationPending: false,
  resetPasswordPending: false,
  confirmPending: false,
  confirmed: false,
  confirmError: "",
  resetPasswordError: "",
  resetPassword: false,
  updatePasswordPending: false,
  updatePasswordError: "",
};

export class UserReducer extends ImmerReducer<IUserStore> {
  setUser(user: User) {
    this.draftState.user = user;
    this.draftState.loginError = null;
    this.draftState.registerError = null;
    this.draftState.confirmError = null;
  }
  setLoginError(error: any) {
    this.draftState.loginError = error.data.message;
  }
  setRegisterError(error: any) {
    this.draftState.registerError = error.data.message;
  }
  disposeUser() {
    this.draftState.user = null;
  }
  setLoginPending(value: boolean) {
    this.draftState.loginPending = value;
  }
  setRegistrationPending(value: boolean) {
    this.draftState.registrationPending = value;
  }
  setMePending(value: boolean) {
    this.draftState.mePending = value;
  }
  setResetPasswordPending(value: boolean) {
    this.draftState.resetPasswordPending = value;
  }
  setConfirmPending(value: boolean) {
    this.draftState.confirmPending = value;
  }
  setConfirmed(value: boolean) {
    this.draftState.confirmed = true;
  }
  setConfirmError(error: any) {
    this.draftState.confirmError = error.data.message;
  }
  setResetPassword(value: boolean) {
    this.draftState.resetPassword = value;
  }
  setResetPasswordError(error: any) {
    this.draftState.resetPasswordError = error.data.message;
  }
  setUpdatePasswordPending(value: boolean) {
    this.draftState.updatePasswordPending = value;
  }
  setUpdatePasswordError(error: any) {
    this.draftState.updatePasswordError = error.data.message;
  }
}

export const userReducerActions = createActionCreators(UserReducer);
export const userReducer = createReducerFunction(UserReducer, initialState);
