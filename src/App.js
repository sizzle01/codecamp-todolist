import React from "react";
import TodoItem from "./Todoitem";
import style from './style.css'
import todosData from "./todosData";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
  }
 
render(){
  const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
  return (
   <div className= "to-list">
{todoItem}

   </div>
    
   
     
  );
}
}
export default App;
