import React from 'react';
import Input from './input';
import Item from './item';

const Todo = (props) => {
    return (
        <div className='priority_area'>
        <span className="priority_name">{props.title}</span>
            <Input/><Item/><Item/><Item/>
        </div>

        );
};

export default Todo;