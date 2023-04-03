import { publicRequest } from './http-common';

type Todo = {
  text: string;
  completed: boolean;
};

export const getAllTodos = () => {
  return publicRequest.get(`/todos`);
}

export const handleAddTodo = (text: string) => {
  const newTodo: Todo  = {
    text,
    completed: false
  }
  return publicRequest.post(`/todos`, newTodo);
}

export const completeTodo = (id: number) => {
  const updateTodo = {
    completed: true
  }
  return publicRequest.put(`/todos/${id}`, updateTodo);
}

export const deleteTodo = (id: number) => {
  return publicRequest.delete(`/todos/${id}`);
}

