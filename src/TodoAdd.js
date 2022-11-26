import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function TodoAdd({ onAdd, onClear }) {
    const [title, setTitle] = useState('')

    const Add = () => {
        if (title === '') {
            return
        }

        let newTodo = { id: uuidv4(), title: title, completed: false }
        onAdd(newTodo)
        setTitle('')
    }

    const Clear = () => onClear()

    const Change = e => setTitle(e.target.value)

    return (
        <>
            <input type='text' placeholder='Enter todo' value={title} onChange={Change}></input>
            <button onClick={Add}>Add</button>
            <button onClick={Clear}>Clear</button>
        </>
    )
}
