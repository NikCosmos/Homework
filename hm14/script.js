'use strict';

const SMALL_BURGER = {
   price: 50,
   calories: 20,
};
const MIDDLE_BURGER = {
   price: 75,
   calories: 30,
};
const BIG_BURGER = {
   price: 100,
   calories: 40,
};

//========================================================================================================================================================

const TOPPING_CHEESE = {
   name: 'cheese',
   price: 10,
   calories: 20,
};
const TOPPING_SALAD = {
   name: 'salad',
   price: 20,
   calories: 5,
};
const TOPPING_POTATOES = {
   name: 'potatoes',
   price: 15,
   calories: 10,
};
const TOPPING_SPICES = {
   name: 'spice',
   price: 15,
   calories: 0,
};
const TOPPING_MAYO = {
   name: 'mayo',
   price: 20,
   calories: 5,
};
//========================================================================================================================================================

class Hamburger {
   constructor(sizeBurger) {
      this._listTopping = [];
      this._size = sizeBurger;
   }

   addTopping(toppingObj) {
      this._listTopping.push(toppingObj);
   }
   removeTopping(toppingObj) {
      const index = this._listTopping.findIndex(
         (objTop) => objTop.name === toppingObj.name
      );
      this._listTopping.splice(index, 1);
   }
   get price() {
      let sumTopping;
      if (this._listTopping.length > 0) {
         sumTopping = this._listTopping
            .reduce((acc, val) => acc.concat(val.price), [])
            .reduce((acc, val) => acc + val);
      }

      let result;
      if (sumTopping) {
         result = this._size.price + sumTopping;
      } else {
         result = this._size.price;
      }

      console.log(`Price with sauce: ${result}`);
      return result;
   }
   get calories() {
      let sumCalories;
      if (this._listTopping.length > 0) {
         sumCalories = this._listTopping
            .reduce((acc, val) => acc.concat(val.calories), [])
            .reduce((acc, val) => acc + val);
      }

      let result;
      if (sumCalories) {
         result = this._size.calories + sumCalories;
      } else {
         result = this._size.calories;
      }

      console.log(`Price with sauce: ${result}`);
      return result;
   }
}

const ham = new Hamburger(SMALL_BURGER);

//========================================================================================================================================================

// class Hamburger {
//    constructor(sizeObj) {
//       this._price = sizeObj.price;
//       this._calories = sizeObj.calories;
//    }

//    addTopping(toppingObj) {
//       this._price += toppingObj.price;
//       this._calories += toppingObj.calories;
//    }
//    removeTopping(toppingObj) {
//       this._price -= toppingObj.price;
//       this._calories -= toppingObj.calories;
//    }

//    get price() {
//       console.log(`Price with sauce: ${this._price}`);
//    }
//    get calories() {
//       console.log(`Callories with sauce: ${this._calories}`);
//    }
// }
