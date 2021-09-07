import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';
import { getTodoList } from '@/apis/todo';
import { setLoading } from '@/store/slices/appSlice';

import Button from '@/components/button';
import TodoList from './components/list';
import { errorHandler } from '@/helpers/axios';
import { Todo } from '@/features/todo/types';

const TodoFeature: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const fetchTodo = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const { data }: AxiosResponse = await getTodoList();
      setTodos(data);
    } catch (error) {
      errorHandler(error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  if (todos.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <div className="">
      <Button primary onClick={() => history.push('/')}>
        Go to home page
      </Button>
      <Button primary onClick={fetchTodo}>
        Re-call todo
      </Button>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoFeature;
