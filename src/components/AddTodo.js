import React, { useState } from 'react';

export const AddTodo = (props) => {
    let [title, setTitle] = useState("")
    let [desc, setdesc] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        if(!title || !desc){
            alert("Title and Description cannot be blank")
        }
        props.addToobj(title, desc)
        setTitle('')
        setdesc('')
    }

    return (
        <div className="container">
            <h3 className="text-center my-3">Add Todo's</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                    <div className="mb-3">
                        <label htmlFor="des" className="form-label">Description</label>
                        <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="des"/>
                    </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success btn-lg">Submit</button>
                        </div>     
            </form>
                    </div>
    )
}
