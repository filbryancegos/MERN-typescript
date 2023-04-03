import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext';

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [error, setError] = useState<string>('')
  const { addTodo } = useTodoContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo === '') return setError('Please input todo')
    addTodo(todo)
    setTodo('')
    setError('')
  }
  
  return (
    <>
      <h1 className='font-bold text-center mb-2 pt-12 text-2xl'>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-4 mt-12 mb-4'>
          <div className=' col-span-1 sm:col-span-3'>
            <input name="todo" value={todo} onChange={handleChange} className=' border p-2 w-full' type="text" />
            {error && <span className='text-red-500'>{error}</span> }
          </div>
          <div className='col-span-1 mb-2'>
            <button type='submit' className='bg-green-500 p-2 text-white w-full'>Add Todo</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddTodo
