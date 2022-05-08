const obj = {
   name: 'Alex',
   age: 33,
   adress: { country: 'UA', city: 'Dnipro' },
};

const objCopy = copy(obj);

function copy(obj) {
   const functionObj = {
      Object: () => {
         let clonObj = {};
         for (let key in obj) {
            clonObj[key] = copy(obj[key]);
         }
         return clonObj;
      },
      Array: () => {
         return obj.map((i) => {
            return copy(i);
         });
      },
   };
   if (obj.constructor.name in functionObj) {
      return functionObj[obj.constructor.name]();
   } else {
      return obj;
   }
}
