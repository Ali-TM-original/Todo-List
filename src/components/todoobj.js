import React from 'react'

export const Todoobj = ({ todo, onDelete }) => {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.des}</p>
            <button className="btn  btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
            <hr></hr>
        </div>
    )
}

// onClick Fires an Arow Function which has Todo object passed to it