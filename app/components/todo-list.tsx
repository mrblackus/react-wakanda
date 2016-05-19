import * as React from 'react';

import {IItem} from '../interfaces/item';
import {TodoItem} from './todo-item';

export interface ITodoListProps {
  items: IItem[];
  onItemClick: (item: IItem) => void;
}

export class TodoList extends React.Component<ITodoListProps, {}> {

  constructor(props: ITodoListProps) {
    super(props);

  }

  public markItemAsDone(item: IItem) {
    this.props.onItemClick(item);
  }

  public renderItem(item: IItem) {
    return <TodoItem key={item.ID} item={item} onItemClick={x => this.markItemAsDone(x)} />
  }

  public render() {
    return (
      <ul>
        {this.props.items.map(this.renderItem.bind(this))}
      </ul>
    );
  }
}