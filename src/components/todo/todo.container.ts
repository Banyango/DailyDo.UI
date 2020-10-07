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
        onInit: () => dispatch(TodoActions.getItems(ownProps.index)),
        onEnterPressOnSubTask: (event) => {
            if (event.key === "Enter") {
                dispatch(TodoActions.addSubtask(ownProps.index));
            }
        },
        onAddSummary: () => dispatch(TodoActions.addSummary(ownProps.index)),
        onAddSubTask: () => dispatch(TodoActions.addSubtask(ownProps.index)),
        onDelete: () => dispatch(TodoActions.deleteTodo(ownProps.parent, ownProps.index)),
        onSubmit: (data) => dispatch(TodoActions.updateTodo(ownProps.parent, ownProps.index, data.text, data.checked)),
        onDispose: () => dispatch(TodoActions.disposeTask(ownProps.index))
    };
};

const mapStateToProps = (state: IStore, ownProps: ITodoOwnProps): ITodoStateProps => {
    const todo = TodoSelectors.todo(state, ownProps.parent, ownProps.index);
    return {
        complete: todo?.completed,
        todos: state.todos.task[ownProps.index],
        loading: state.todos.pending[todo.id],
        initializing: false,
        submitting: false,
        fields: {
            checked: createFormField<boolean>("checked", todo?.completed, undefined, todo?.completed),
            text: createFormField<string>("text", todo?.text, undefined, todo?.text)
        },
    };
};

export const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoComponent);
