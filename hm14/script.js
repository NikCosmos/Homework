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
   price: 10,
   calories: 20,
};
const TOPPING_SALAD = {
   price: 20,
   calories: 5,
};
const TOPPING_POTATOES = {
   price: 15,
   calories: 10,
};
const TOPPING_SPICES = {
   Price: 15,
   calories: 0,
};
const TOPPING_MAYO = {
   price: 20,
   calories: 5,
};
//========================================================================================================================================================

class Hamburger {
   constructor(sizeObj) {
      this._price = sizeObj.price;
      this._calories = sizeObj.calories;
   }

   addTopping(toppingObj) {
      this._price += toppingObj.price;
      this._calories += toppingObj.calories;
   }
   removeTopping(toppingObj) {
      this._price -= toppingObj.price;
      this._calories -= toppingObj.calories;
   }

   get price() {
      console.log(`Price with sauce: ${this._price}`);
   }
   get calories() {
      console.log(`Callories with sauce: ${this._calories}`);
   }
}
