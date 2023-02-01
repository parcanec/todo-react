import React from 'react'
import { useState, useEffect } from 'react'
import Input from './input'
import Item from './item'

const Todo = (props) => {
    const [todoList, setTodoList] = useState(props.list)

    function removeItem (number) {
        setTodoList(todoList.filter((item, index)=>index!==number))
    }

    function addItem (name, status = 'done') {
        const newList = [...todoList, {name, status}]
        setTodoList(newList)
    }

    function changeStatus (number) {
        const array = [...todoList]
        array[number].status = array[number].status === 'done'  ? 'todo' : 'done'
        setTodoList(array)
    }

    return (
        <div className='priority_area'>
        <span className="priority_name">{props.title}</span>
            <Input addItem={addItem} task={props.task}/>
            {
                todoList.map((item, index) => <Item 
                    removeItem={removeItem}
                    changeStatus={changeStatus} 
                    name={item.name} 
                    status={item.status} 
                    number={index}/>)
            }
        </div>
        )
}

export default Todo;