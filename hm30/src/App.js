import React, { Component } from 'react';
import TodoFormComponent from './TodoFormComponent';
import TodoListComponent from './TodoListComponent';
import './all-styles/normalize.css';
import './all-styles/skeleton.css';
import './all-styles/dark-theme.css';
import './App.css';

class App extends Component {
   state = {
      todoList: [
         {
            id: 1,
            task: 'One',
            status: false,
         },
         {
            id: 2,
            task: 'Two',
            status: true,
         },
         {
            id: 3,
            task: 'Three',
            status: false,
         },
      ],
   };
   render() {
      return (
         <div className="u-full-width container">
            <TodoListComponent
               todoList={this.state.todoList}
               onRemove={this.removeTodo}
               onChange={this.changeStatus}
            />
            <TodoFormComponent onSubmitForm={this.addTodo} />
         </div>
      );
   }
   removeTodo = (e, id) => {
      e.stopPropagation();
      this.setState({
         todoList: this.state.todoList.filter(
            (task) => task.id !== id
         ),
      });
   };
   changeStatus = (currentTodo) => {
      let updateTodo = {
         ...currentTodo,
         status: !currentTodo.status,
      };
      this.setState({
         todoList: this.state.todoList.map((todo) =>
            todo.id !== currentTodo.id ? todo : updateTodo
         ),
      });
   };
   addTodo = (e, val, reset) => {
      e.preventDefault();
      const newTodo = {
         id: Date.now(),
         task: val,
         status: false,
      };
      this.setState({
         todoList: [...this.state.todoList, newTodo],
      });
      reset();
   };
}

export default App;
