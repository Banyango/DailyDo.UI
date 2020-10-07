import {IDayPageDispatchProps, IDayPageStateProps} from "./day-page.props";
import {ThunkDispatch} from "redux-thunk";
import {IStore} from "../../store/store";
import {connect} from "react-redux";
import {DayPageComponent} from "./day-page.component";
import {DayActions} from "../../store/day/day.actions";


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, any>
): IDayPageDispatchProps => {
    return {
        onDeleteDay: (id:string) => dispatch(DayActions.deleteDay(id))
    };
};

const mapStateToProps = (state: IStore): IDayPageStateProps => {
    return {}
};

export const DayPageContainer = connect(mapStateToProps, mapDispatchToProps)(DayPageComponent);
