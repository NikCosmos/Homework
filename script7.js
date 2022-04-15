function createCalculator(initValue) {
   let result = initValue;
   return {
      add: (n) => (result += n),
      sub: (n) => (result -= n),
      mult: (n) => (result *= n),
      div: (n) => (result /= n),
      set: (n) => (result = n),
      get: () => result,
   };
}

const calc = createCalculator(10);

calc.add(10);
calc.mult(10);
calc.get();
calc.set(1586);
calc.get();
calc.add(1000);
