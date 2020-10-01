import {ISubTaskOwnProps, ISubTaskDispatchProps, ISubTaskStateProps, SubTaskComponent} from "./sub-task.component";
import {IStore} from "../../store/store";
import {createFormField} from "../form/form.props";
import {connect} from "react-redux";
import {TodoActions} from "../../store/todos/todo.actions";
import {TodoSelectors} from "../todo/todo.selectors";

const mapDispatchToProps = (
    dispatch, ownProps: ISubTaskOwnProps
): ISubTaskDispatchProps => {
    console.log(ownProps);
    return {
        onDelete: () => dispatch(TodoActions.deleteTodo(ownProps.parent, ownProps.index)),
        onSubmit: (data) => dispatch(TodoActions.updateTodo(ownProps.parent, ownProps.index, data.text, data.checked))
    };
};

const mapStateToProps = (state: IStore, ownProps: ISubTaskOwnProps): ISubTaskStateProps => {
    const todo = TodoSelectors.todo(state, ownProps.parent, ownProps.index);
    return {
        completed: todo?.completed,
        initializing: false,
        submitting: false,
        fields: {
            checked: createFormField<boolean>("checked", todo?.completed, undefined, todo?.completed),
            text: createFormField<string>("text", todo?.text, undefined, todo?.text),
        },
    };
};

export const SubTaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubTaskComponent);
