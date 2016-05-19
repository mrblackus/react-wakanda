import {IDispatch} from 'redux';
import {connect} from 'react-redux';

import {IAppState} from '../app';
import {TodoList} from '../components/todo-list';

export const TodoListContainer = connect(
  (state: IAppState) => {
    return {
      items: state.items
    };
  },
  (dispatch: IDispatch) => {
    return {
    };
  }
)(TodoList);
