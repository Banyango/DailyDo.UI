import {Day} from "../../state/day";
import {createActionCreators, createReducerFunction, ImmerReducer} from "immer-reducer";

export interface IDayStore {
    days: { [key: string]: Day };
    selectedDay: string;
}

const initialState: IDayStore = {
    days: {},
    selectedDay: null,
};

export class DayReducer extends ImmerReducer<IDayStore> {
    addDay(day: Day) {
        this.draftState.days[day.id] = day;
    }

    updateSummary(text: string, id: string) {
        this.draftState.days[id].summary = text;
    }

    selectDay(dayId: string) {
        this.draftState.selectedDay = dayId;
    }

    removeDay(id:string) {
        delete this.draftState.days[id];
    }
}

export const dayReducerActions = createActionCreators(DayReducer);
export const dayReducer = createReducerFunction(DayReducer, initialState);