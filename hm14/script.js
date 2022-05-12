'use strict';

const SMALL_BURGER = {
   size: 'small',
   price: 50,
   calories: 20,
};
const MIDDLE_BURGER = {
   size: 'middle',
   price: 75,
   calories: 30,
};
const BIG_BURGER = {
   size: 'big',
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
      this._size = sizeBurger;
      this._listTopping = [];
   }

   replaceSize(newSize) {
      this._size = newSize;
   }

   addTopping(toppingObj) {
      this._listTopping.push(toppingObj);
   }
   removeTopping(toppingObj) {
      const index = this._listTopping.findIndex((objTop) => objTop.name === toppingObj.name);
      this._listTopping.splice(index, 1);
   }
   get price() {
      let result = null;
      if (this._listTopping.length > 0) {
         const sumTopping = this._listTopping.reduce((acc, val) => acc.concat(val.price), []).reduce((acc, val) => acc + val);
         result = this._size.price + sumTopping;
      } else {
         result = this._size.price;
      }
      return `Total price: ${result}`;
   }
   get calories() {
      let result = null;
      if (this._listTopping.length > 0) {
         const sumCalories = this._listTopping.reduce((acc, val) => acc.concat(val.calories), []).reduce((acc, val) => acc + val);
         result = this._size.calories + sumCalories;
      } else {
         result = this._size.calories;
      }
      return `Total calories: ${result}`;
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
