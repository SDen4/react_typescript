import React from 'react';

type Iprops = {
  todos: any[];
};

export const TodoList: React.FC<Iprops> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className="todo">
            <label>
              <input type="checkbox" />
              <span></span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
