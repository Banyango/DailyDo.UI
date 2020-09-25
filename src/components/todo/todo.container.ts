import {ThunkDispatch} from "redux-thunk";
import {ITodoOwnProps, ITodoPageDispatchProps, ITodoStateProps, TodoComponent} from "./todo.component";
import {IStore} from "../../store/store";
import {createFormField} from "../form/form.props";
import {connect} from "react-redux";
import {TodoActions} from "../../store/todos/todo.actions";
import {TodoSelectors} from "./todo.selectors";

const mapDispatchToProps = (
    dispatch, ownProps: ITodoOwnProps
): ITodoPageDispatchProps => {
    console.log(ownProps);
    return {
        onEnterPressOnSubTask: (event) => {
            if (event.key === "Enter") {
                dispatch(TodoActions.addSubtask(ownProps.index));
            }
        },
        onAddSummary: () => dispatch(TodoActions.addSummary(ownProps.index)),
        onAddSubTask: () => dispatch(TodoActions.addSubtask(ownProps.index)),
        onDelete: () => dispatch(TodoActions.deleteTodo(ownProps.parent, ownProps.index)),
        onSubmit: (data) => dispatch(TodoActions.updateTodo(ownProps.parent, ownProps.index, data.checked, data.text))
    };
};

const mapStateToProps = (state: IStore, ownProps: ITodoOwnProps): ITodoStateProps => {
    const todo = TodoSelectors.todo(state, ownProps.parent, ownProps.index);
    return {
        complete: todo?.complete,
        todos: state.todos.todos[ownProps.index],
        initializing: false,
        submitting: false,
        fields: {
            checked: createFormField<boolean>("checked", todo?.complete, undefined, todo?.complete),
            text: createFormField<string>("text", todo?.task, undefined, todo?.task)
        },
    };
};

export const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoComponent);
