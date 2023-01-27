import React from 'react';

const Item = (props) => {
    return (
        <div className="task_list">
        <label><input type="radio" checked={props.status==='done'}/>{props.name}</label>
        <button id="delButton" onClick={() => {alert('Функция removeItem')} }>×</button>
        </div>
    );
};

export default Item;