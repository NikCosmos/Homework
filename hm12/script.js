'use strict';

const TEMP_CONTACT_HTML =
   document.getElementById('tempContact').innerHTML;
const JSON_KEY = 'contactList';

const ERR_TEXT = {
   SHORTPHONE: 'Short phone!',
   SHORTVAL: 'Short value!',
   EMPTY: 'Empty value!',
   NOTPHONE: 'This is not a phone',
};

const SELECTOR_USER = '.contact-user';

const HIDDEN_CLASS = 'hidden';

const contactEl = document.querySelectorAll('.input');
const formEl = document.querySelector('.contact-form');
const listContactEl = document.querySelector('.contact-list');
const errListTextEl = document.querySelectorAll('.err-text');
const addBtnEl = document.querySelector('.add-btn');
const deleteBtnEL = document.querySelector('.delete-btn');

let contactList = [];

init();

formEl.addEventListener('submit', onClickBtnAdd);
contactEl[0].addEventListener('input', onInputName);
contactEl[1].addEventListener('input', onInputSurName);
contactEl[2].addEventListener('input', onInputPhone);
listContactEl.addEventListener('click', onDeleteBtnClick);

function onClickBtnAdd(el) {
   el.preventDefault();
   submitForm();
}

function submitForm() {
   if (checkError()) {
      addContact();
      renderList();
      clearForm();
   }
}

function init() {
   getInStorage();
   renderList();
}

function addContact() {
   const contactObj = getContact();
   contactObj.id = Date.now();
   contactList.push(contactObj);
   updateStorage();
}

function getInStorage() {
   const htmlJson = localStorage.getItem(JSON_KEY);
   contactList = JSON.parse(htmlJson) ? JSON.parse(htmlJson) : [];
}

function updateStorage() {
   const contactData = JSON.stringify(contactList);
   localStorage.setItem(JSON_KEY, contactData);
}

function getContact() {
   const newContact = {};

   contactEl.forEach((inp) => {
      newContact[inp.name] = inp.value;
   });

   return newContact;
}

function renderList() {
   listContactEl.innerHTML = contactList
      .map(generateContactHtml)
      .join('');
}

function generateContactHtml(contact) {
   return interpolate(TEMP_CONTACT_HTML, contact);
}

function interpolate(template, obj) {
   for (let key in obj) {
      template = template.replaceAll(`{{${key}}}`, obj[key]);
   }

   return template;
}

function onInputName() {
   const error = validationName(contactEl[0].value);
   errorStatus(error, errListTextEl[0]);
   return error;
}

function onInputSurName() {
   const error = validationName(contactEl[1].value);
   errorStatus(error, errListTextEl[1]);
   return error;
}

function onInputPhone() {
   const error = validationPhone(contactEl[2].value);
   errorStatus(error, errListTextEl[2]);
   return error;
}
function validationName(value) {
   if (value === '') return ERR_TEXT.EMPTY;
   if (value.length < 3) return ERR_TEXT.SHORTVAL;
   return null;
}

function validationPhone(value) {
   if (isNaN(value)) return ERR_TEXT.NOTPHONE;
   if (value === '') return ERR_TEXT.EMPTY;
   if (value.length < 3) return ERR_TEXT.SHORTPHONE;
   return null;
}

function checkError() {
   if (onInputName() || onInputSurName() || onInputPhone()) {
      return null;
   }
   return true;
}

function errorStatus(error, place) {
   if (error) {
      showError(error, place);
   } else {
      clearError(place);
   }
}

function clearForm() {
   formEl.reset();
}

function showError(error, place) {
   place.textContent = error;
   place.classList.remove(HIDDEN_CLASS);
}

function clearError(place) {
   place.classList.add(HIDDEN_CLASS);
}

function onDeleteBtnClick(el) {
   const contactRow = el.target;
   const id = getIdTask(contactRow);
   removeContact(id);
}

function getIdTask(contactRow) {
   return +contactRow.closest(SELECTOR_USER).dataset.id;
}

function removeContact(id) {
   contactList = contactList.filter((obj) => obj.id !== id);
   updateStorage();
   renderList();
} 