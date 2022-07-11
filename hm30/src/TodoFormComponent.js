import React, { Component } from 'react';

class TodoFormComponent extends Component {
   state = {
      value: '',
   };
   render() {
      return (
         <form
            onSubmit={(e) =>
               this.props.onSubmitForm(
                  e,
                  this.state.value,
                  this.resetInput
               )
            }
            className="ten columns"
         >
            <input
               onChange={this.onInputChange}
               value={this.state.value}
               name="task"
               type="text"
            />
            <button>Add</button>
         </form>
      );
   }

   onInputChange = (e) => {
      this.setState({
         value: e.target.value,
      });
   };
   resetInput = () => {
      this.setState({
         value: '',
      });
   };
}

export default TodoFormComponent;
