import { useState, useEffect } from 'react'
import './App.css'
import Todo from './components/todo.jsx'
import Input from './components/input.jsx'
import Item from './components/item.jsx'

const LIST = [
  {name:'create a new practice task', status: 'done'},
  {name:'make a bed', status: 'done'},
  {name:'write a post', status: 'todo'}
]

function App() {
  return (
    <div className='todo_form'>
    <Todo title='Высокий приоритет' list={LIST}/>
    <Todo title='Низкий приоритет' list={[]}/>
    </div>
  )
}

export default App