import * as React from 'react';

import {IItem} from '../interfaces/item';

 export interface ITodoItemProps {
  item: IItem;
  onItemClick: (item: IItem) => void;
};

export class TodoItem extends React.Component<ITodoItemProps, {}> {

  public markAsDone() {
    this.props.onItemClick(this.props.item);
  }

  public render() {
    const doneStr = this.props.item.done ? '(done)' : '';

    return <li onClick={() => this.markAsDone()}>{this.props.item.label} {doneStr}</li>
  }
}
