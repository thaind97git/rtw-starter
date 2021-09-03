import { AxiosResponse } from 'axios';
import HttpRequest from '@/services/http-request';

export const getTodoList = (payload: Object): Promise<AxiosResponse<unknown>> =>
  HttpRequest.get('https://jsonplaceholder.typicode.com/todos', payload);

export const getTodoDetails = (id: string): Promise<AxiosResponse<unknown>> =>
  HttpRequest.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
