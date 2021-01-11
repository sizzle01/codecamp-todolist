import React from "react";
import TodoItem from "./Todoitem";
import style from './style.css'
import todoData from "./todoData";


function App() {
 const todoItem = todoData.map(item => <TodoItem key={item.id} item={item}/>)

  return (
   <div className= "to-list">
{todoItem}

   </div>
    
   
     
  );
}

export default App;
