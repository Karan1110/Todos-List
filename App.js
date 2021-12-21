//Importing specific stuff.
import React, { useState, useEffect } from 'react';
import Header from './MyComponents/Header.js';
import { AddTodo } from './MyComponents/AddTodo.js';
import { Todos } from './MyComponents/Todos.js';
import { Footer } from './MyComponents/Footer.js';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Main function (App function):
function App() {
  let initTodo;
  if (localStorage.getItem("tasks") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("tasks"));
  }
  //onDelete function.
  const onDelete = (todo) => {
    console.log('i am on onDelete of todo of ', todo);
    //filter array method.
    setTodos(todos.filter((deleteItem) => {
      return deleteItem !== todo;
    }));
    localStorage.setItem('tasks', JSON.stringify(todos));
    localStorage.getItem('tasks');
  };
  //addTodo function.
  const addTodo = (title, desc) => {
    console.log('i am adding a task', title, desc);
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);//To add a 'myTodo' object inside 'todos' array.
    console.log(myTodo);
  };
  //Makking todos Array
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos));
  }, [todos])
  //Returning components.
  return (
    <> 
    <Router>
      <Header title = "LetoTasks" searchBar={true} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  ); 
};
//Exporting App component.
export default App;

/*_______________________________________________________________________________________________________________________________________
    Notes:
    concepts covered:
    Using props.
    Using useState.
    using useEffect.
    switching.
    Routing.
*/

