import {ThunkDispatch} from "redux-thunk";
import {IStore} from "../../store/store";
import {connect} from "react-redux";
import {TodoActions} from "../../store/todos/todo.actions";
import {ITodoListDispatchProps, ITodoListOwnProps, ITodoListStateProps} from "./todo-list.props";
import {TodoListComponent} from "./todo-list.component";


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, any>,
    ownProps:ITodoListOwnProps
): ITodoListDispatchProps => {
    return {
        onInit: () => {},
        onReorderTodo: (key, result) => dispatch(TodoActions.reorderTodo(key, result.source.index, result.destination.index)),
        onReorderSubTask: (parent, key, result) => dispatch(TodoActions.reorderTodo(key, result.source.index, result.destination.index)),
        onAddTodo: () => dispatch(TodoActions.addTodo(ownProps.parent)),
        onDispose: () => dispatch(TodoActions.disposeTask(ownProps.parent))
    };
};

const mapStateToProps = (state: IStore, ownProps:ITodoListOwnProps): ITodoListStateProps => {
    return {
        todos: state.todos.task[ownProps.parent],
        loading: state.todos.pending[ownProps.parent]
    }
};

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
