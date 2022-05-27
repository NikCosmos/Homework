const CLASS = {
   ADD_BTN: 'head-button',
   DEL_BTN: 'delete-button',
   DESCR: 'descr-text',
};

const SELECTORS = {
   STICK: '.main-item',
};

const TEMP_STICK = document.getElementById('tempStickItem').innerHTML;

const STICKERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const StickApi = new RestApi(STICKERS_URL);

const contentEl = document.querySelector('.wrapper');
const listStickEl = document.querySelector('.main-row');

contentEl.addEventListener('click', (e) => {
   if (e.target.classList.contains(CLASS.ADD_BTN)) {
      addNewStick();
   }
   if (e.target.classList.contains(CLASS.DEL_BTN)) {
      const item = e.target.closest(SELECTORS.STICK);
      deleteStick(getId(item));
   }
});

contentEl.addEventListener('focusout', (e) => {
   if (e.target.classList.contains(CLASS.DESCR)) {
      const upItem = e.target.closest(SELECTORS.STICK);
      updateStick(upItem);
   }
});

let listStick = [];

init();

function init() {
   fetchStickList();
}

function fetchStickList() {
   StickApi.getList().then((data) => {
      listStick = data;
      renderList();
   });
}

function renderList() {
   listStickEl.innerHTML = listStick.map(renderItem).join('');
}

function renderItem(stick) {
   return interpolate(TEMP_STICK, stick);
}

function getId(el) {
   return el.dataset.id;
}

function addNewStick() {
   const id = Date.now();
   const newStick = { id, description: '' };
   listStick.push(newStick);
   renderList();
   StickApi.create(newStick).then(fetchStickList).catch(fetchStickList);
}

function deleteStick(id) {
   const index = listStick.findIndex((obj) => obj.id === id);
   listStick.splice(index, 1);
   renderList();
   StickApi.delete(id).catch(fetchStickList);
}

function updateStick(upItem) {
   const updatedItem = addObjStick(upItem);
   StickApi.update(updatedItem).catch(fetchStickList);
}

function addObjStick(item) {
   return addNewObj(item);
}

function addNewObj(item) {
   const id = getId(item);
   const description = getDestcription(item);
   return { id, description };
}

function getDestcription(item) {
   return item.children[1].value;
}
