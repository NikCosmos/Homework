'use strict';

const TEMP_USER_HTML = document.getElementById('tempUser').innerHTML;
const userListEl = document.getElementById('userList');

let allUserData = [];

init();

function init() {
   getData();
}

function getData() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((date) => {
         allUserData = date;
         renderList();
      });
}

function renderList() {
   return (userListEl.innerHTML = allUserData
      .map(createdHtml)
      .join(''));
}

function createdHtml(user) {
   return TEMP_USER_HTML.replace('{{name}}', user.name)
      .replace('{{email}}', user.email)
      .replace('{{phone}}', user.phone)
      .replace('{{city}}', user.address.city)
      .replace('{{street}}', user.address.street);
}
