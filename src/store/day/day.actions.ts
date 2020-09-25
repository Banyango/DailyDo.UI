import {Dispatch} from "redux";
import {IStore} from "../store";
import {dayReducerActions} from "./day.reducer";
import {v4 as uuidv4} from "uuid";
import {Day} from "../../state/day";

export class DayActions {
    public static AddDay() {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            dispatch(dayReducerActions.addDay({
                id:uuidv4(),
                todoTopLevel:uuidv4(),
                date:'today',
            }));
        }
    }

    public static SelectDay(day: string) {
        return async (dispatch:Dispatch, getState: ()=> IStore) => {
            dispatch(dayReducerActions.selectDay(day));
        }
    }

    public static getSelectedDay(state: IStore) {
        return state.days.days[state.days.selectedDay];
    }
}