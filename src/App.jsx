import { useState, useEffect } from 'react'
import './App.css'
import Todo from './components/todo.jsx'
import Input from './components/input.jsx'
import Item from './components/item.jsx'
//import useScreen from './hooks/useScreen'

const LIST = [
  {name:'make a 0', status: 'done'},
  {name:'make a 1', status: 'done'},
  {name:'make a 2', status: 'done'},
  {name:'make a 3', status: 'done'},
  {name:'make a 4', status: 'done'},
  {name:'write a post 5', status: 'todo'}
]

function App() {
  return (
    <div className='todo_form'>
    <Todo title='Высокий приоритет' list={LIST}/>
    <Todo title='Низкий приоритет' list={[]}/>
    </div>
  )
}
//<p>{isMobile?'это телефон':'это десктоп'}</p>
//const {isMobile} = useScreen()
export default App