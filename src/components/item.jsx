import React from 'react';

const Item = () => {
    return (
        <div className="task_list">
        <label><input type="radio"/>create a new practice task</label>
        <button id="delButton">×</button>
        </div>
    );
};

export default Item;