import React from 'react';
import { useState, useEffect } from 'react'
import Input from './input';
import Item from './item';

const Todo = (props) => {
    const [todoList, setTodoList] = useState(props.list)
    
    function removeItem (index) {
        console.log(index)
    }
    
    return (
        <div className='priority_area'>
        <span className="priority_name">{props.title}</span>
            <Input/>
            {
                todoList.map((item, index) => <Item removeItem={removeItem} name={item.name} status={item.status} number={index}/>)
            }
        </div>
        );
};

export default Todo;