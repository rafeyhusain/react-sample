import React from 'react'

export default function Todo({ todo, onToggle }) {
    const Toggle = () => onToggle(todo)

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={Toggle} />
                {todo.title}
            </label>
        </div>
    )
}
