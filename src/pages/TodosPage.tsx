import React, { useState, useEffect } from 'react';

import { ITodo } from '../interfaces';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

import axios from '../axios/axios';

export const TodosPage: React.FC = (): React.ReactElement => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // get elements from localstorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved);
  }, []);

  // save element to localstorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = async (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);

    try {
      const response = await axios.post('/todos.json', newTodo);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const removeHandler = (id: number) => {
    const confirm = window.confirm('Are you sure to delete this todo?');
    if (confirm) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  );
};
