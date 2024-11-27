import { useState } from 'react';
import './App.css';
import { TodoProvider } from './contexts';

function App() {
  const [todos, setTodods] = useState([])

  const addTodo = (todo) => {
    setTodods((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodods((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          {/* Todo form goes here */}
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/* Loop and Add TodoItem here */}
        </div>
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;
