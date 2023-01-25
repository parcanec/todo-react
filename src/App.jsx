import { useState, useEffect } from 'react'
import './App.css'
import Todo from './components/todo.jsx'
import Input from './components/input.jsx'
import Item from './components/item.jsx'


function App() {
  return (
    <div className='todo_form'>
    <Todo title='Высокий приоритет'/>
    <Todo title='Низкий приоритет'/>
    </div>
  )
}

export default App