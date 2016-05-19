import * as React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, IAction, IActionGeneric} from 'redux';
import * as createLogger from 'redux-logger';
const thunkMiddleware: any = require('redux-thunk').default;

import {IItem} from './interfaces/item';
import {TodoListContainer} from './containers/todo-list-container';

export interface IAppState {
  items: IItem[];
}

const initialItems = [
  {ID: 0, label: 'learn react',    done: false},
  {ID: 1, label: 'try out redux',  done: false},
  {ID: 2, label: 'be positive',    done: true}
];

const reducer = (state: IAppState = {items: []}, action: IAction) => {
  switch (action.type) {
    case 'ITEMS_FETCHED':
      return Object.assign({}, state, {
        items: (action as IActionGeneric<IItem[]>).payload
      });
    default:
      return state;
  }
};

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

function fetchedItem(items: IItem[]): IActionGeneric<IItem[]> {
  return {
    type: 'ITEMS_FETCHED',
    payload: items
  };
};

store.dispatch(fetchedItem(initialItems));


render(<TodoListContainer store={store} />, document.getElementById('react-mount'));