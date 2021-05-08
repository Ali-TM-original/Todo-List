// THIS IS A HELPER COMPONENT TO LOOP THROUGH THE DATA



import React from 'react'
import { Todoobj } from '../components/todoobj.js';


export const Todos = (props) => {
    return (
        <div className="container">
            <h1 className="text-center my-3">Todo List</h1>
            {props.todos.length === 0 ? <div className="card">
                <div className="card-header">
                    Notice!
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Oh boy it looks like you have no work :0</p>
                        <footer className="blockquote-footer">Someone famous</footer>
                    </blockquote>
                </div>
            </div> :  //else starts form : 
                props.todos.map((todos) =>
                    <Todoobj todo={todos} key={todos.sno} onDelete={props.onDelete} />
                )}
        </div>
    )
}

// ES7 syntax if conditions