const operator = getOperator();

const a = getOperand('Первый операнд');

const b = getOperand('Второй операнд');

let result = calculate(a, b, operator);

showResult();

function getOperator() {
   let val;
   do {
      val = prompt('Выбери оператор');
   } while (checkOperator(val));
   return val;
}

function checkOperator(operator) {
   if (
      operator == '+' ||
      operator == '-' ||
      operator == '*' ||
      operator == '/'
   ) {
      return false;
   } else {
      return true;
   }
}

function getOperand(messange) {
   let val;
   do {
      val = prompt(messange);
   } while (checkOperand(val));
   return +val;
}

function checkOperand(operand) {
   if (isNaN(operand)) {
      return true;
   } else if (operand === null) {
      return true;
   } else {
      return false;
   }
}

function calculate(x, y, action) {
   switch (action) {
      case '+':
         return x + y;
      case '-':
         return x - y;
      case '*':
         return x * y;
      case '/':
         return x / y;
   }
}

function showResult() {
   alert(`${a} ${operator} ${b} = ${result}`);
}
