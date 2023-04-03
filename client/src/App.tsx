import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <div className='container m-auto'>
        <TodoProvider>
          <ToastContainer />
          <AddTodo />
          <TodoList />
        </TodoProvider>
      </div>
    </div>
  )
}

export default App
