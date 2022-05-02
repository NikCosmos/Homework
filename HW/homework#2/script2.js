const action = prompt('Какое действие вы хотите выполнить   +   -   *   /   ?');

if (action === '+' || action === '-' || action === '*' || action === '/') {
   const numberOne = +prompt('Первое число?');
   const numberTwo = +prompt('Второе число?');
   let result;
   switch (action) {
      case '+':
         result = numberOne + numberTwo;
         result
            ? alert(`${numberOne} + ${numberTwo} = ${result}`)
            : alert('Ошибка!');
         break;
      case '-':
         result = numberOne - numberTwo;
         result
            ? alert(`${numberOne} - ${numberTwo} = ${result}`)
            : alert('Ошибка!');
         break;
      case '*':
         result = numberOne * numberTwo;
         result
            ? alert(`${numberOne} * ${numberTwo} = ${result}`)
            : alert('Ошибка!');
         break;
      case '/':
         result = numberOne / numberTwo;
         result
            ? alert(`${numberOne} / ${numberTwo} = ${result}`)
            : alert('Ошибка!');
         break;
      default:
         alert(
            'Такое действие не доступно! Выбери одно из доступных + | - | * | /'
         );
         break;
   }
} else {
   alert('Выбери один из операторов!');
}
