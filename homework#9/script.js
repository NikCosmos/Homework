const inputTaskEl = document.getElementById('input-task');
const addBtnEl = document.getElementById('addbtn');
const listEl = document.querySelector('.list');
const errorEl = document.querySelector('.error');

addBtnEl.addEventListener('click', onAddBtn);
inputTaskEl.addEventListener('input', valueCheck);
inputTaskEl.addEventListener('input', checkErr);

function onAddBtn() {
   if (!valueCheck()) {
      createLi();
      addLi();
      clearCase();
   } else {
      checkErr();
   }
}

function createLi() {
   const created = createElement('li');
   created.textContent = getValue();
   created.classList = 'link';
   return created;
}

function createElement(el) {
   return document.createElement(el);
}

function addLi() {
   return listEl.append(createLi());
}

function getValue() {
   return inputTaskEl.value;
}

function clearCase() {
   inputTaskEl.value = '';
}

function valueCheck() {
   if (getValue().length <= 3) return true;
   if (getValue().length > 3) return false;
}

function checkErr() {
   if (valueCheck()) return showError();
   clearErr();
}

function showError() {
   inputTaskEl.classList.add('invalid');
   if (getValue() === '') return (errorEl.textContent = 'Empty value');
   errorEl.textContent = 'Invalid value';
}

function clearErr() {
   inputTaskEl.classList.remove('invalid');
   errorEl.textContent = '';
}
