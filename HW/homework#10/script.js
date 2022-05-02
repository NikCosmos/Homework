const TEMPLATE_CONTACT = document.getElementById('tempItemPhoneBook').innerHTML;

const inputFirstNameEl = document.getElementById('inputFirstName');
const inputLastNameEl = document.getElementById('inputLastName');
const inputNumberEl = document.getElementById('inputNumber');

const addbtnEl = document.getElementById('addbtn');
const deleteBtnEL = document.getElementById('deleteBtn');

const formEl = document.getElementById('form');
const tableContactEl = document.getElementById('tableContact');

const errFirstNameEL = document.getElementById('errorFirstName');
const errLastNameEL = document.getElementById('errorLastName');
const errNumberEl = document.getElementById('errorNumber');

formEl.addEventListener('submit', onSubForm);
inputFirstNameEl.addEventListener('input', onInputFirstName);
inputLastNameEl.addEventListener('input', onInputLastName);
inputNumberEl.addEventListener('input', onInputNumber);
tableContactEl.addEventListener('click', onDeleteBtn);

function onSubForm(e) {
   e.preventDefault();
   if (
      !errFirstNameEL.classList.contains('lock') &&
      !errLastNameEL.classList.contains('lock') &&
      !errNumberEl.classList.contains('lock')
   ) {
      submitForm();
      clearForm();
   }
}

function onInputFirstName() {
   validateFirstName();
}

function onInputLastName() {
   validateLastName();
}

function onInputNumber() {
   validateNumber();
}

function onDeleteBtn(e) {
   if (e.target.classList.contains('delete-btn')) {
      deleteTask(e.target.closest('.bodytb'));          
   }
}

function submitForm() {
   const objContact = getAllValueContact();
   return addNewContact(objContact);
}

function getAllValueContact() {
   const contact = {
      firstName: getValue(inputFirstNameEl),
      lastName: getValue(inputLastNameEl),
      phoneNumber: getValue(inputNumberEl),
   };
   return contact;
}

function getValue(el) {
   return el.value;
}

function addNewContact(objContact) {
   const newContact = createContact(objContact);
   return tableContactEl.insertAdjacentHTML('beforeend', newContact);
}

function createContact(objContact) {
   return TEMPLATE_CONTACT.replace('{{firstname}}', objContact.firstName)
      .replace('{{lastname}}', objContact.lastName)
      .replace('{{number}}', objContact.phoneNumber);
}

function validateFirstName() {
   const firstNameVal = getValue(inputFirstNameEl);
   const error = nameValidation(firstNameVal);

   if (error) {
      showError(error, errFirstNameEL);
   } else {
      clearError(errFirstNameEL);
   }
}

function validateLastName() {
   const lastNameVal = getValue(inputLastNameEl);
   const error = nameValidation(lastNameVal);

   if (error) {
      showError(error, errLastNameEL);
   } else {
      clearError(errLastNameEL);
   }
}

function validateNumber() {
   const numberVal = +getValue(inputNumberEl);
   const error = numberValidation(numberVal);
   if (error) {
      showError(error, errNumberEl);
   } else {
      clearError(errNumberEl);
   }
}

function nameValidation(val) {
   if (val === '') return 'Empty value';
   if (val.length < 3) return 'Short value';
   return null;
}

function numberValidation(number) {
   if (isNaN(number)) return 'Value is not a number';
   return null;
}

function showError(error, errEl) {
   errEl.textContent = error;
   errEl.classList.add('lock');
}

function clearError(errEl) {
   errEl.textContent = '';
   errEl.classList.remove('lock');
}

function clearForm() {
   inputFirstNameEl.value = '';
   inputLastNameEl.value = '';
   inputNumberEl.value = '';
   errFirstNameEL.classList.add('lock');
   errLastNameEL.classList.add('lock');
   errNumberEl.classList.add('lock');
}

function deleteTask(el) {
   el.remove();
}
