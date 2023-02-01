import { useState, useEffect } from 'react'
import React from 'react'

const Input = (props) => {
    const [text, setText] = useState('')

    const  submit = (env) => { 
        env.preventDefault()
        if (text !== '') {
            props.addItem(text)
            setText('')
        }
    }

    return (
        <form className="add_task" 
            onSubmit={submit}>
        <input 
            placeholder="Добавить важное дело" 
            onChange={(event)=>setText(event.target.value)}
            value={text}/>
        <button id="addButtonHigh" type="submit">+</button>
        </form>
    )
}

export default Input