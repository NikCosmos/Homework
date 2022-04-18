const operandOneEl = document.getElementById('operandone');
const operandTwoEl = document.getElementById('operandtwo');
const errOne = document.getElementById('errone');
const errTwo = document.getElementById('errtwo');
const sum = document.querySelector('.result');
const calcBtn = document.querySelector('.calcbtn');
const actionEl = document.querySelector('.opetator');

//========================================================================================================================================================

operandOneEl.addEventListener('input', checkOperandOne);

function checkOperandOne() {
   const operandVal = getValue(operandOneEl);
   showResult(operandVal, errOne);
}

operandTwoEl.addEventListener('input', checkOperandTwo);

function checkOperandTwo() {
   const operandVal = getValue(operandTwoEl);
   showResult(operandVal, errTwo);
}

calcBtn.addEventListener('click', calculate);

function calculate() {
   const a = +getValue(operandOneEl);
   const b = +getValue(operandTwoEl);
   const result = calcResult(a, b);
   if (isNaN(result)) {
      return (sum.textContent = 'Ошибка!'), (sum.style.color = '#ff0000');
   }
   if (result === Infinity) {
      return (
         (sum.textContent = 'Делить на ноль низя:D'),
         (sum.style.color = '#0000ff')
      );
   }

   return (sum.style.color = '#008000'), (sum.textContent = `= ${result}`);
}


//========================================================================================================================================================

function getValue(operand) {
   return operand.value;
}

function showResult(val, errVal) {
   if (isNaN(val))
   return (errVal.textContent = 'Ошибка!'), (errVal.style.color = '#ff0000');
   if (val === '')
   return (
      (errVal.textContent = 'Пустая строка!'),
      (errVal.style.color = '#ff0000')
      );
      return (errVal.textContent = 'Все окей!'), (errVal.style.color = '#008000');
}

function calcResult(a, b) {
   switch (getValue(actionEl)) {
      case '+':
         return a + b;
      case '-':
         return a - b;
      case '*':
         return a * b;
      case '/':
         return a / b;
   }
}