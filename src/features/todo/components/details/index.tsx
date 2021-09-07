import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTodoDetails } from '@/apis/todo';
import { setLoading } from '@/store/slices/appSlice';

import RLink from '@/components/r-link';
import Button from '@/components/button';
import EmptyRecord from '@/components/empty-record';
import { errorHandler } from '@/helpers/axios';
import { Todo } from '@/features/todo/types';

import BackIcon from '@/static/images/icon/back.svg';

const TodoDetails: React.FC = () => {
  const params: { id?: string } = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<{ data?: Todo; fetching: boolean }>({
    fetching: false,
  });

  const fetchTodoDetails = useCallback(
    async id => {
      dispatch(setLoading(true));
      setTodo(prev => ({ ...prev, fetching: true }));
      try {
        const { data } = await getTodoDetails(id);
        setTodo(prev => ({
          ...prev,
          data,
        }));
      } catch (error) {
        errorHandler(error);
      } finally {
        dispatch(setLoading(false));
        setTodo({
          fetching: false,
        });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    fetchTodoDetails(id);
  }, [fetchTodoDetails, id]);

  if (id && todo.fetching) {
    return <>Fetching Todo Details...</>;
  }

  if (!id || !todo.data) {
    return <EmptyRecord title="Can not find any todo" />;
  }

  return (
    <div className="todo-details">
      <Button>
        <RLink className="back" to="/todos" prefix={<BackIcon />}>
          Back
        </RLink>
      </Button>
      <h3>Todo Details here</h3>
      <b>Id:</b> {todo.data.id}
      <br />
      <b>Title:</b> {todo.data.title}
    </div>
  );
};

export default TodoDetails;
