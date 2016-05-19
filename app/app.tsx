import * as React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, combineReducers, IAction, IActionGeneric} from 'redux';
const createLogger: any = require('redux-logger');
const thunkMiddleware: any = require('redux-thunk').default;

import {IItem} from './interfaces/item';
import {TodoListContainer} from './containers/todo-list-container';

import {find} from '../src/index';

export interface IAppState {
  items: IItem[];
}

const initialItems = [
  {ID: 0, label: 'learn react',    done: false},
  {ID: 1, label: 'try out redux',  done: false},
  {ID: 2, label: 'be positive',    done: true}
];

const reducer = (state: IItem[] = [], action: IAction) => {
  switch (action.type) {
    case 'ITEMS_FETCHED':
      return (action as IActionGeneric<IItem[]>).payload;
    default:
      return state;
  }
};

const totoReducer = (state: any = {}, action: IActionGeneric<any>) => {
  switch (action.type) {
    case 'FIND_SUCCESS':
      console.log('we got some items from find!', action.payload);
      return Object.assign({}, state, {
        entity: action.payload
      });
    default:
      return state;
  }
};

const logger = createLogger();
const store = createStore(combineReducers({
  items: reducer,
  toto: totoReducer
  }), applyMiddleware(thunkMiddleware, logger));

function fetchedItem(items: IItem[]): IActionGeneric<IItem[]> {
  return {
    type: 'ITEMS_FETCHED',
    payload: items
  };
};

store.dispatch(fetchedItem(initialItems));


render(<TodoListContainer store={store} />, document.getElementById('react-mount'));

function findSuccess(data): IActionGeneric<any> {
  return {
    type: 'FIND_SUCCESS',
    payload: data
  };
};

store.dispatch(find({
  dataClassName: 'Product',
  key: 889,
  successAction: findSuccess
}) as any);
