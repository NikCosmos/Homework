function createCalculator(initValue) {
   let result;
   return {
      add: (n) =>
         console.log(
            result !== undefined ? (result += n) : (result = n + initValue)
         ),
      sub: (n) =>
         console.log(
            result !== undefined ? (result -= n) : (result = n - initValue)
         ),
      mult: (n) =>
         console.log(
            result !== undefined ? (result *= n) : (result = n * initValue)
         ),
      div: (n) =>
         console.log(
            result !== undefined ? (result /= n) : (result = n / initValue)
         ),
      set: (n) => console.log((result = n)),
      get: () => console.log(result),
   };
}

const calc = createCalculator(10);

calc.add(10);
calc.mult(10);
calc.get();
calc.set(1586);
calc.get();
calc.add(1000);
