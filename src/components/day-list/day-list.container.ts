import {ThunkDispatch} from "redux-thunk";
import {IStore} from "../../store/store";
import {connect} from "react-redux";
import {DayList, IDayListDispatchProps, IDayListStateProps} from "./day-list.component";
import {createSelector} from "reselect";
import {Day} from "../../state/day";
import {Item} from "../list/list.component";
import {DayActions} from "../../store/day/day.actions";

const selectDays = createSelector(
    (state: IStore) => state.days.days,
    (state: IStore) => state.days[state.days.selectedDay],
    (days: {[id:string]:Day}, selectedDay: Day) => Object.values(days).map<Item>(i => ({key:i.id, value:i.date, selected:i.id===selectedDay?.id}))
);

const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, any>
): IDayListDispatchProps => {
    return {
        onClick: (dayId: string) => dispatch(DayActions.SelectDay(dayId))
    };
};

const mapStateToProps = (state: IStore): IDayListStateProps => {
    return {
        items: selectDays(state),
        selectedDay: state.days.selectedDay
    }
};

export const DayListContainer = connect(mapStateToProps, mapDispatchToProps)(DayList);
