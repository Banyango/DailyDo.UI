import {IStore} from "../../store/store";
import {createFormField} from "../form/form.props";
import {connect} from "react-redux";
import {TodoActions} from "../../store/todos/todo.actions";
import {TodoSelectors} from "../todo/todo.selectors";
import {ISummaryDispatchProps, ISummaryOwnProps, ISummaryStateProps, SummaryComponent} from "./summary.component";

const mapDispatchToProps = (
    dispatch, ownProps: ISummaryOwnProps
): ISummaryDispatchProps => {
    console.log(ownProps);
    return {
        onDelete: () => dispatch(TodoActions.deleteTodo(ownProps.parent, ownProps.index)),
        onSubmit: (data) => dispatch(TodoActions.updateSummary(ownProps.parent, ownProps.index, data.text))
    };
};

const mapStateToProps = (state: IStore, ownProps: ISummaryOwnProps): ISummaryStateProps => {
    const todo = TodoSelectors.todo(state, ownProps.parent, ownProps.index);
    return {
        initializing: false,
        submitting: false,
        fields: {
            text: createFormField<string>("text", undefined, undefined, todo.task),
        },
    };
};

export const SummaryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SummaryComponent);
