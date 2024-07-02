import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function Todo() {

    let[Todo,setTodo] = useState([{task:"eat",id:uuidv4()}]);
    let[NewTodo,setNewTodo] = useState("");



    let handelChange = (event) => {
     setNewTodo(event.target.value);
    }


    let handelClick = () => {
        setTodo((preTo) => {
       return [...preTo,{task:NewTodo,id:uuidv4()}]
        });
        setNewTodo("");
    }


    let handelDelete = (id) => {
        setTodo(Todo.filter((Tod) => (Tod.id != id) ));
    }

    let handelUpperCaseAll = () => {
       setTodo(Todo.map((Tod) => {return {...Tod,task:Tod.task.toUpperCase()}}))
    }

    let handelUpperCaseOne = (id) => {
      setTodo(Todo.map((Tod) => {
          if(Tod.id == id){
            return {...Tod,task:Tod.task.toUpperCase()}
            }else{
             return Tod
            }
        }))
    } 

    let border = {height:"40rem",width:"50rem",borderRadius:"3rem"}
    let width = {width:"30rem", position:"relative",left:"15rem"}
    let position = {position:"relative",right:"17rem" ,top:"2.25rem",fontSize:"2rem"}
    let widt = {position:"relative"}
    
    return(

        <div style={border} className="border border-5 bg-secondary opacity-10"> <br /><br />

            <h1>Todo App</h1><br /><br />
             
     <label htmlFor="input" style={position} className="text-white">Enter Todo :</label>
     <div className="input-group mb-3" style={width}>

    <input type="text"
     className="form-control"
     placeholder="Enter Todo"
     aria-describedby="button-addon2"
     id="input"
     value={NewTodo}
     onChange={handelChange}
     ></input>

    <button className="btn btn-primary"
     type="button"
    id="button-addon2"
    onClick={handelClick}>Button</button>
        </div> <br /><br /><br />

  <ul className="text-white">
  {Todo.map((Tod) => {

 return <li key={Tod.id}>
 <span>{Tod.task}</span>&nbsp;&nbsp;&nbsp;&nbsp;
 <button onClick={() => handelDelete(Tod.id)} className="btn btn-primary">Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <button onClick={() => handelUpperCaseOne(Tod.id)} className="btn btn-primary">UpperCase One</button>

    </li>
  })}
 </ul>
<br />
<button onClick={handelUpperCaseAll} style={widt}>Uppercase All</button>
</div>
    );
}

export default Todo;