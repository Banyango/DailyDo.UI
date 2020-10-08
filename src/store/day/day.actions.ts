import {Dispatch} from "redux";
import {IStore} from "../store";
import {dayReducerActions} from "./day.reducer";
import {HttpAction} from "../../utils/request-utils";
import {Day} from "../../state/day";
import {IPaginated} from "../../rest/paginated";
import {push} from "connected-react-router";
import {AppRoutes} from "../../app/Routes";

export class DayActions {

    public static getDays() {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            const action: HttpAction<IPaginated<Day>> = {
                type: "GET_DAYS",
                meta: {
                    type: "http",
                    method: "get",
                    href: "/api/v1/auth/days",
                    onSuccess: dayReducerActions.setDays
                },
            };

            return dispatch(action);
        }
    }

    public static AddDay() {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            const action: HttpAction<Day> = {
                type: "POST_DAY",
                meta: {
                    type: "http",
                    method: "post",
                    href: "/api/v1/auth/days",
                    onSuccess: dayReducerActions.addDay
                },
            };

            return dispatch(action);
        }
    }

    public static UpdateDay(day: Pick<Day, 'id' | 'summary'>) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            const action: HttpAction<Day, Pick<Day, 'id' | 'summary'>> = {
                type: "PUT_DAY",
                meta: {
                    type: "http",
                    method: "put",
                    href: `/api/v1/auth/days/${day.id}`,
                    onSuccess: dayReducerActions.setDay,
                    payload: day,
                },
            };

            return dispatch(action);
        }
    }

    static deleteDay(id: string) {
        return async (dispatch: Dispatch) => {
            const action: HttpAction<void, Pick<Day, "id" >> = {
                type: "DELETE_DAY",
                meta: {
                    type: "http",
                    method: "delete",
                    href: `/api/v1/auth/days/${id}`,
                    onSuccess: () => dayReducerActions.removeDay(id),
                },
            };

            return dispatch(action);
        }
    }

    public static SelectDay(day: string) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            await dispatch(dayReducerActions.selectDay(day));
            return dispatch(push(AppRoutes.Days(day)));
        }
    }

    public static getSelectedDay(state: IStore) {
        return state.days.days[state.days.selectedDay];
    }
}