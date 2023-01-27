import React from 'react'

const Input = (props) => {
    return (
        <form className="add_task">
        <input id="highValue" placeholder="Добавить важное дело" type="text"/>{props.task}
        <button id="addButtonHigh" type="submit">+</button>
        </form>
    );
};

export default Input