import React, { Component } from 'react';
import './App.css';

class Calc extends Component {
   state = {
      firstVal: 0,
      secondVal: 0,
      action: '+',
   };
   onChangeFirst = (e) => {
      if (!isNaN(e.target.value)) {
         this.setState({
            firstVal: +e.target.value,
         });
      }
   };
   onChangeSecond = (e) => {
      if (!isNaN(e.target.value)) {
         this.setState({
            secondVal: +e.target.value,
         });
      }
   };

   counterRes = (first, second, action) => {
      if (first !== '' && second !== '') {
         switch (action) {
            case '+':
               return first + second;
            case '-':
               return first - second;
            case '/':
               return first / second;
            case '*':
               return first * second;
         }
      }
   };

   render() {
      return (
         <div className="wrapper">
            <div className="container">
               <input onChange={this.onChangeFirst} value={this.state.firstVal} type="text" />
               <select
                  onChange={(e) => {
                     this.state.action = e.target.value;
                     this.setState({
                        firstVal: '',
                        secondVal: '',
                     });
                  }}
               >
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="/">/</option>
                  <option value="*">*</option>
               </select>
               <input onChange={this.onChangeSecond} value={this.state.secondVal} type="text" />
               <div>{this.counterRes(this.state.firstVal, this.state.secondVal, this.state.action)}</div>
            </div>
         </div>
      );
   }
}
export default Calc;
