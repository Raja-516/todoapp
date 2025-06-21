import React, { useState } from 'react';
import './App.css';

const App =() => {
  const [todoo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const adding = ()=>{
    if (todoo.trim() !== ""){
      setTodos([...todos, todoo]);
      setTodo('');
    }
  }
  const delfun= (ind) => {
    const newTodos = todos.filter((_, index) => index !== ind);
    setTodos(newTodos);
  }
  
  const Editbtn = (ind)=>{
    alert("you want to edit this item");
    


  }
  
  return (
    <>
      <div>
        <label htmlFor="inpText">Name : 
        <input type="text" className="inpText" name="Name" value={todoo} onChange={(e)=>setTodo(e.target.value)}  /></label>
        <input type="submit" className="btn" value="add" onClick={adding} />
      </div>
      <div>
        <h2 className="sty">Todo list</h2>
        <ul>
        {todos && todos.map((todook,ind)=>(
          <li key={ind}>{todook} <button onClick={()=> delfun(ind)}>Delete </button> </li>
          

        ))
}
         </ul>
      </div>
    </>
  )
}
export default App