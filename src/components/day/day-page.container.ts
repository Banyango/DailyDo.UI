import {IDayPageDispatchProps, IDayPageOwnProps, IDayPageStateProps} from "./day-page.props";
import {ThunkDispatch} from "redux-thunk";
import {IStore} from "../../store/store";
import {connect} from "react-redux";
import {DayPageComponent} from "./day-page.component";
import {DayActions} from "../../store/day/day.actions";
import {TodoActions} from "../../store/todos/todo.actions";


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, any>
): IDayPageDispatchProps => {
    return {
        onInit: (id: string) => dispatch(TodoActions.getTasksForDay(id)),
        onDeleteDay: (id:string) => dispatch(DayActions.deleteDay(id))
    };
};

const mapStateToProps = (state: IStore, ownProps: IDayPageOwnProps): IDayPageStateProps => {
    return {
        loading: state.todos.pending[ownProps.day.id]
    }
};

export const DayPageContainer = connect(mapStateToProps, mapDispatchToProps)(DayPageComponent);
