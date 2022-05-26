'use strict';
const LIST_CLASS = {
   ALBUM_NAME: 'album-name',
   ALBUM_IMG: 'album-img',
   POPUP_CONTENT: 'popup-content',
   POPUP_IMG: 'popup-img',
   ACTIVE_POPUP: 'active',
};
const TEMP_NAME_ALBUM = document.getElementById('tempNameAlbum').innerHTML;
const TEMP_IMG = document.getElementById('tempImg').innerHTML;
const TEMP_FULL_IMG = document.getElementById('fullImg').innerHTML;

const API__ALBUMS = 'https://jsonplaceholder.typicode.com/albums/';
const API__IMG = 'https://jsonplaceholder.typicode.com/photos?albumId=';

const listNameApi = new RestApi(API__ALBUMS);
const imgApi = new RestApi(API__IMG);

const containerEl = document.querySelector('.container');
const listAlbumEl = document.querySelector('.list-albums');
const listImgEl = document.querySelector('.album-list-img');
const popupContentEl = document.querySelector('.popup-content');
const popupEl = document.querySelector('.popup');

let listTitle = [];
let currentImgs = [];

containerEl.addEventListener('click', (e) => {
   if (e.target.classList.contains(LIST_CLASS.ALBUM_NAME)) {
      const id = e.target.dataset.albumId;
      openSelectedAlbum(id);
   }
   if (e.target.classList.contains(LIST_CLASS.ALBUM_IMG)) {
      const id = e.target.dataset.imgId;
      createPopup(id);
   }
   if (e.target.classList.contains(LIST_CLASS.POPUP_CONTENT) || e.target.classList.contains(LIST_CLASS.POPUP_IMG)) {
      closePopup();
   }
});

init();

function init() {
   getAlbumList();
}

function getAlbumList() {
   listNameApi.getList().then((date) => {
      listTitle = date;
      renderNameList();
      document.querySelector('.' + LIST_CLASS.ALBUM_NAME).click();
   });
}

function openSelectedAlbum(id) {
   imgApi.getOne(id).then((date) => {
      currentImgs = date;
      renderListImg();
   });
}

function createPopup(id) {
   const urlFullImg = getUrlImg(id);
   popupContentEl.innerHTML = genericPopup(urlFullImg);
   openPopup();
}

function openPopup() {
   popupEl.classList.add(LIST_CLASS.ACTIVE_POPUP);
}

function closePopup() {
   popupEl.classList.remove(LIST_CLASS.ACTIVE_POPUP);
}

function genericPopup(urlFullImg) {
   return TEMP_FULL_IMG.replace('{{url}}', urlFullImg);
}

function getUrlImg(id) {
   const obj = currentImgs.find((obj) => obj.id === +id);
   return obj.url;
}

function renderNameList() {
   const createHtml = listTitle.map(interName).join(' ');
   listAlbumEl.innerHTML = createHtml;
}
function interName(obj) {
   return TEMP_NAME_ALBUM.replace('{{id}}', obj.id).replace('{{title}}', obj.title);
}

function renderListImg() {
   const createHtml = currentImgs.map(interImg).join('');
   listImgEl.innerHTML = createHtml;
}

function interImg(obj) {
   return TEMP_IMG.replace('{{src}}', obj.thumbnailUrl).replace('{{id}}', obj.id);
}
