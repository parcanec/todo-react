import React from 'react'

const Input = () => {
    return (
        <form className="add_task">
        <input id="highValue" placeholder="Добавить важное дело" type="text"/>
        <button id="addButtonHigh" type="submit">+</button>
        </form>
    );
};

export default Input