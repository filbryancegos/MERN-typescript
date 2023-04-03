import React from 'react'

interface Props {
  _id: number;
  text?: string;
  completed?: boolean;
  handleDeleteTodo: (id: number) => void;
  handleCompleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({_id, text, completed, handleDeleteTodo, handleCompleteTodo}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 py-1'>
      <div className={`sm:col-span-3 flex-1 bg-blue-500 p-2 rounded-md text-white ${completed ? 'line-through' : ''}`}>{text}</div>
      <div className='sm:col-span-1 flex gap-2'>
        <button disabled={completed} onClick={() => handleCompleteTodo(_id)} className={`p-2 rounded-md text-white w-full ${completed ? 'bg-teal-200' : 'bg-teal-500'}`}>Complete</button>
        <button onClick={() => handleDeleteTodo(_id)} className='bg-red-500 p-2 rounded-md text-white w-full'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
