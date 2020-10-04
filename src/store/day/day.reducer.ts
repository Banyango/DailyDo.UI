import {Day} from "../../state/day";
import {createActionCreators, createReducerFunction, ImmerReducer} from "immer-reducer";
import {IPaginated} from "../../rest/paginated";

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

    setDays(days: IPaginated<Day>) {
        for (let day of days.items) {
            this.draftState.days[day.id] = day;
        }
    }

    setDay(day: Day) {
        this.draftState.days[day.id] = day;
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