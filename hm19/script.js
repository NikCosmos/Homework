const CLASS = {
   ADD_BTN: 'head-button',
   DEL_BTN: 'delete-button',
   DESCR: 'descr-text',
};

const SELECTORS = {
   STICK: '.main-item',
   ADD_BTN: '.head-button',
   DEL_BTN: '.delete-button',
   DESCR: '.descr-text',
};

const tempStick = $('#tempStickItem').html();
const STICK_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const stickRest = new RestApi(STICK_URL);

const $allContent = $('.content');
const $listBox = $('.main-row');

let $listStick = $([]);

$allContent.on('click', SELECTORS.ADD_BTN, addNewStick);
$allContent.on('click', SELECTORS.DEL_BTN, deleteStick);
$allContent.on('input', SELECTORS.DESCR, debounce(updateStick, 500));

init();

function init() {
   fetchList();
}

function fetchList() {
   stickRest.getList().then((data) => {
      $listStick = data;
      renderList();
   });
}

function addNewStick() {
   const newStick = creatEmptyStick();
   $listStick.push(newStick);
   renderItem(newStick);
   stickRest.create(newStick).then((responseStick) => {
      $listStick = $listStick.map((stick) => (stick.id === newStick.id ? responseStick : stick));
      renderList();
   });
}

function deleteStick(el) {
   const id = getId(el);
   const $element = getElement(id);
   $element.remove();
   stickRest.delete(id);
}

function updateStick(el) {
   const element = el.target;
   const note = updateNote(getId(el), element.name, element.value);
   stickRest.update(note);
}

function renderList() {
   $listBox.html($listStick.map(replaceContent).join(''));
}
function renderItem(item) {
   $listBox.append(replaceContent(item));
}

function replaceContent(stick) {
   return interpolate(tempStick, stick);
}

function creatEmptyStick() {
   const id = Date.now();
   const obj = { id, description: ' ' };
   return obj;
}

function getId(el) {
   return el.target.closest(SELECTORS.STICK).dataset.id;
}

function getElement(id) {
   return $(`[data-id = ${id}]`);
}

function updateNote(id, name, value) {
   const note = $listStick.find((el) => el.id === id);
   note[name] = value;
   return note;
}
