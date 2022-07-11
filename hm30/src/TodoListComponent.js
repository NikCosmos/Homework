import React, { Component } from 'react';

class TodoListComponent extends Component {
   render() {
      return (
         <ul className=" five columns">
            {this.props.todoList.map((todo) => (
               <li
                  onClick={() => this.props.onChange(todo)}
                  className="task"
                  key={todo.id}
                  data-status={todo.status ? true : false}
               >
                  {todo.task}
                  <span
                     className="delbtn"
                     onClick={(e) => this.props.onRemove(e, todo.id)}
                  >
                     X
                  </span>
               </li>
            ))}
         </ul>
      );
   }
}

export default TodoListComponent;
