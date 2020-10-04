import {ThunkDispatch} from "redux-thunk";
import {IDaySummaryDispatchProps, IDaySummaryOwnProps, IDaySummaryStateProps} from "./day-summary.types";
import {IStore} from "../../store/store";
import {connect} from "react-redux";
import {DaySummaryComponent} from "./day-summary.component";
import {createFormField} from "../form/form.props";
import {DayActions} from "../../store/day/day.actions";

const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, any>,
    ownProps:IDaySummaryOwnProps
): IDaySummaryDispatchProps => {
    return {
        onSubmit: (data) => dispatch(DayActions.UpdateDay({id:ownProps.dayId, summary:data.summary}))
    };
};

const mapStateToProps = (state: IStore): IDaySummaryStateProps => {
    // todo update this
    const day = DayActions.getSelectedDay(state);
    return {
        initializing: false,
        submitting: false,
        fields: {
            summary: createFormField<string>("summary", day?.summary, undefined, day?.summary),
        },
    }
};

export const DaySummaryContainer = connect(mapStateToProps, mapDispatchToProps)(DaySummaryComponent);
