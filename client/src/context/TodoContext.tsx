import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAllTodos, deleteTodo, completeTodo, handleAddTodo   } from '../services'
import { toast, ToastContainer } from 'react-toastify';

type Todo = {
  _id: number;
  text: string;
  completed: boolean;
};

type Todos = Todo[];

type TodoContextType = {
  todos: Todos;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  handleDelete: (id: number) => void;
};

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  handleDelete: () => {},
});

type Props = {
  children: React.ReactNode;
};

const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todos>([]);
  const [message, setMessage] = useState<string>('');

  const notify = (text: string) => {
    toast.success(text, {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const fetchTodos = async () => {
    try {
      const res = await getAllTodos();
      setTodos(res.data.todos)
      setMessage(res.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   fetchTodos();
  }, [])

  useEffect(() => {
    if (message) notify(message);
   
  }, [message])
  
  
  const addTodo = async (text: string) => {
    try {
      const res = await handleAddTodo(text);
      if (res.data.success) fetchTodos();
      setMessage(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo = async (id: number) => {
    try {
      const res = await completeTodo(id);
      if (res.data.success) fetchTodos();
      setMessage(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteTodo(id);
      if (res.data.success) fetchTodos();
      setMessage(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue: TodoContextType = {
    todos,
    addTodo,
    toggleTodo,
    handleDelete,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
    );
};

export const useTodoContext = () => {
  return useContext(TodoContext)
}

export { TodoContext, TodoProvider }
