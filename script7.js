function createCalculator(initValue) {
   let result = initValue;
   return {
      add: (n) => console.log((result += n)),
      sub: (n) => console.log((result -= n)),
      mult: (n) => console.log((result *= n)),
      div: (n) => console.log((result /= n)),
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
