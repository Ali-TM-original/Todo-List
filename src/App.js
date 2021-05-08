
import './App.css';
import Header from './components/header.js';
import {Todos} from './components/todos.js';
import {Footer} from './components/footer.js';
import {AddTodo} from './components/AddTodo.js'
import {Clock} from './components/clock.js';
import React, { useState } from 'react';



function App() {
  const onDelete = (todoobjects)=>{
    // Used With onClick for individual objects
    console.log("Me is Ondelete", todoobjects)
    // Filter returns all the objects and matches the objects with clicked
    setTodos(todoobj.filter((e)=>{
      return e!==todoobjects

    }));
  }

  const addTodo = (title, des)=>{
    let sno;
    if(todoobj.length === 0){
      sno = 1
    }else{
      sno = todoobj[todoobj.length-1].sno +1;
    }
    const todolist = {
      sno:sno,
      title:title,
      des:des,
    }
    // setTodos(todoobj.push(todolist)) wrong method
    console.log(todolist.title)
    if(todolist.title=== "" || todolist.des === ""){
      console.log("yo see it to?")
    }else{
    setTodos([...todoobj, todolist])}
    title= ""
    des = ""
  }

  const [todoobj, setTodos] = useState([])
  return (
    <>
    <Header/>
    <Clock/>
    <AddTodo addToobj={addTodo}/>
    <Todos todos={todoobj} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;

// This is jsx not Html 
// This is called a Component
// Wrap in opening and closing tags
// setTodos is a function to update the Todo Objects