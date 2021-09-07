import React, { Fragment } from 'react';

import { ensureArray } from '@/utils';
import { generatePath, goURL } from '@/helpers/router';
import { Todo } from '../../types';

import ViewDetailsICon from '@/static/images/icon/view-details.svg';
import EditIcon from '@/static/images/icon/edit.svg';

interface IProps {
  todos: Array<Todo>;
}

const TodoList: React.FC<IProps> = ({ todos = [] }) => {
  return (
    <ul className="todo-list">
      {ensureArray(todos).map(todo => {
        const { id, title } = todo || {};
        return (
          <Fragment key={id}>
            <li className="todo-list__item">
              <ViewDetailsICon
                className="todo-list__item__icon"
                onClick={() =>
                  goURL(generatePath(['todos', 'details'], { id }))
                }
              />
              <EditIcon
                onClick={() => goURL(generatePath(['todos', 'edit'], { id }))}
                className="todo-list__item__icon"
              />
              {title}
            </li>
            <hr />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default TodoList;
