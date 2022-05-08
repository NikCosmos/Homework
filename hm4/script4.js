const operator = getOperator();

const operand = getOperand();

const result = calculate(operator, operand);

showResult(operator, operand);

function getOperator() {
   let op;

   do {
      op = prompt('Укажите оператор');
   } while (isValueOperator(op));

   return op;
}

function isValueOperator(val) {
   return val !== '+' && val !== '-' && val !== '/' && val !== '*';
}

function getOperand() {
   let operand;
   do {
      operand = prompt('Числа');
   } while (operand === null || operand === '');
   return operand.split(',');
}

// function splitOperand(operand) {
//    let arr = operand.split(',');
//    return arr;
// }

function calculate(x, y) {
   let sum = +y[0];
   for (i = 1; i < y.length; i++) {
      switch (x) {
         case '+':
            sum += +y[i];
            break;
         case '-':
            sum -= +y[i];
            break;
         case '*':
            sum *= +y[i];
            break;
         case '/':
            sum /= +y[i];
            break;
      }
   }
   return sum;
}

function showResult(x, y) {
   let str = y.join(`${x}`);
   return alert(`${str} = ${result}`);
}
