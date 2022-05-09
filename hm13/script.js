'use strict';

function Calculator(startVal) {
   this.result = startVal;
}

function Action() {
   this.sum = function (val) {
      return (this.result += val);
   };
   this.sub = function (val) {
      return (this.result -= val);
   };
   this.div = function (val) {
      return (this.result /= val);
   };
   this.mult = function (val) {
      return (this.result *= val);
   };
   this.res = function () {
      return this.result;
   };
}

Calculator.prototype = new Action();

const calc = new Calculator(10);
