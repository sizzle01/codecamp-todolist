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
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(id){
    this.setState(prevState =>{
      const updatedTodo = prevState.todos.map(todo =>{
        if (todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return{
        todos: updatedTodo
      }
    })
  }   
render(){
  const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
  return (
  
   <div className= "todo-list">
    {todoItem}

   </div>
    
   
     
  );
}
}
export default App;
