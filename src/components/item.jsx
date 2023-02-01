import React from 'react';

const Item = (props) => {
    return (
        <div className="task_list">
        <label><input type="radio" 
        onClick={() => {props.changeStatus(props.number)}} 
        checked={props.status==='done'} />{props.name}</label>
        <button id="delButton" onClick={() => {props.removeItem(props.number)} }>×</button>
        </div>
    );
};

export default Item;