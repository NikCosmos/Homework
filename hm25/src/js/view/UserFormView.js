export default class UserFormView {
   static submitFormEL = document.getElementById('submitForm');
   static allTextInput = document.querySelectorAll('.contact-data');
   static getNewUser() {
      const newUser = {};
      UserFormView.allTextInput.forEach((inp) => {
         newUser[inp.name] = inp.value;
      });
      return newUser;
   }

   constructor(config = {}) {
      UserFormView.submitFormEL.addEventListener('submit', (el) => {
         el.preventDefault();
         return UserFormView.getNewUser();
      });
   }
}
