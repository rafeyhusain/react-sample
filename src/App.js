import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

function App() {
  const TODO_KEY = 'todo.key'
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem(TODO_KEY))
    if (storedTodos) {
      console.log(storedTodos)
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos))
  }, [todos])

  const Add = (todo) => {
    setTodos([...todos, todo])
  }

  const Clear = () => {
    let remaining = todos.filter(x => !x.completed)
    setTodos(remaining)
  }

  const Toggle = (todo) => {
    let newTodos = [...todos]
    let newTodo = newTodos.find(x => x.id === todo.id)
    newTodo.completed = !newTodo.completed
    setTodos(newTodos)
  }

  return (<>
    <TodoAdd onAdd={Add} onClear={Clear}></TodoAdd>
    <TodoList todos={todos} onToggle={Toggle}></TodoList>
  </>
  );
}

export default App;
