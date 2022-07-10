'use strict';
const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const TEMP_USER_HTML = document.getElementById('tempUser').innerHTML;
const CONTACT_SELECTOR = '.contact-user';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';

const submitFormEl = document.getElementById('submitForm');
const userListEl = document.getElementById('userList');
const allTextInputEl = document.querySelectorAll('.contact-data');
const hiddenInputEl = document.querySelector('.hidden-input');

let listContact = [];

init();

submitFormEl.addEventListener('submit', onClickSendBtn);
userListEl.addEventListener('click', onClickListBtn);

function onClickSendBtn(e) {
   e.preventDefault();
   submitForm();
}

function onClickListBtn(e) {
   const id = getContactId(e.target);
   if (e.target.classList.contains(DELETE_BTN_CLASS)) {
      deleteContact(id);
   }
   if (e.target.classList.contains(EDIT_BTN_CLASS)) {
      editContact(id);
   }
}

function init() {
   getList();
}

function getList() {
   fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
         listContact = data;
         renderList();
      });
}

function renderList() {
   userListEl.innerHTML = listContact.map(createdHtml).join('');
}

function createdHtml(user) {
   return TEMP_USER_HTML.replace('{{id}}', user.id)
      .replace('{{name}}', user.name)
      .replace('{{phone}}', user.phone)
      .replace('{{email}}', user.email);
}

function submitForm() {
   const contact = getContact();
   sendContact(contact);
   resetForm();
}

function getContact() {
   const newContact = {};

   allTextInputEl.forEach((inp) => {
      newContact[inp.name] = inp.value;
   });
   return newContact;
}

function sendContact(сontact) {
   if (сontact.id) {
      updateContact(сontact);
   } else {
      addContact(сontact);
   }
}

function updateContact(сontact) {
   fetch(API_URL + сontact.id, {
      method: 'PUT',
      body: JSON.stringify(сontact),
      headers: {
         'Content-Type': 'application/json',
      },
   }).then((data) => getList());
}

function addContact(сontact) {
   fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(сontact),
      headers: {
         'Content-Type': 'application/json',
      },
   }).then((data) => getList());
}

function getContactId(el) {
   const contact = el.closest(CONTACT_SELECTOR);
   return contact.dataset.id;
}

function deleteContact(id) {
   fetch(API_URL + id, {
      method: 'DELETE',
   }).then((data) => getList());
}

function editContact(id) {
   const contact = listContact.find((el) => el.id === id);
   setContact(contact);
}

function setContact(contact) {
   allTextInputEl.forEach((inp) => {
      inp.value = contact[inp.name];
   });
}

function resetForm() {
   submitFormEl.reset();
   hiddenInputEl.value = '';
}
