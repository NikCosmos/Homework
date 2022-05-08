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
   const result = calcResult(a, b, getValue(actionEl));
   return validResult(result);
}

//========================================================================================================================================================

function getValue(operand) {
   return operand.value;
}

function showResult(val, errVal) {
   return validVal(val, errVal);
}

function validVal(val, errVal) {
   if (isNaN(val)) {
      errVal.textContent = 'Ошибка!';
      errVal.style.color = '#ff0000';
   } else if (val === '') {
      errVal.textContent = 'Пустая строка!';
      errVal.style.color = '#ff0000';
   } else {
      errVal.textContent = 'Все окей!';
      errVal.style.color = '#008000';
   }
}

function validResult(result) {
   if (isNaN(result)) {
      sum.textContent = 'Ошибка!';
      sum.style.color = '#ff0000';
   } else if (result === Infinity) {
      sum.textContent = 'Делить на ноль низя:D';
      sum.style.color = '#0000ff';
   } else {
      sum.style.color = '#008000';
      sum.textContent = `= ${result}`;
   }
}

function calcResult(a, b, action) {
   switch (action) {
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
