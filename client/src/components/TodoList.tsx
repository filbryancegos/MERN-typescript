import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, handleDelete } = useTodoContext();
 
  const handleCompleteTodo = (id: number) => {
    toggleTodo(id);
  };

  const handleDeleteTodo = (id: number) => {
    handleDelete(id);
  };

  return (
    <>
      { todos?.map(todo => 
        <div key={todo._id}>
          <TodoItem 
            handleDeleteTodo={handleDeleteTodo} 
            {...todo}
            handleCompleteTodo={handleCompleteTodo}
          />
        </div>
      )}
    </>
  )
}

export default TodoList
