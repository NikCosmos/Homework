const SELECTOR = {
   ITEM: '.album-item',
};

const LIST_ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums/';
const LIST_IMG_URL = 'https://jsonplaceholder.typicode.com/photos/';
const TEMP_ALBUB_ITEM = $('#tempItem').html();
const TEMP_IMG_ITEM = $('#tempImg').html();

const listApi = new RestApi(LIST_ALBUM_URL);
const listImg = new RestApi(LIST_IMG_URL);

const $listTitleEl = $('.list-album');
const $listImgsEl = $('.images');

let albumList = [];
let currenImgs = [];

$listTitleEl.on('click', SELECTOR.ITEM, onActiveAlbum);

init();

function init() {
   fetctListAlbum().then(() => fetchImg(albumList[0].id));
}

function fetctListAlbum() {
   return listApi.getList().then((data) => {
      albumList = data;
      renderAlbumList();
   });
}

function renderAlbumList() {
   $listTitleEl.html(albumList.map(createItemHtml).join(''));
   return albumList;
}

function createItemHtml(item) {
   return interpolate(TEMP_ALBUB_ITEM, item);
}

function onActiveAlbum(el) {
   const id = getId(el);
   currenImgs = [];
   fetchImg(id);
}

function fetchImg(albumId) {
   listImg.getList({ albumId }).then((data) => {
      currenImgs = data;
      renderImgs(currenImgs);
   });
}

function renderImgs(currenImgs) {
   $listImgsEl.html(currenImgs.map(createImgsHtml).join(''));
}

function createImgsHtml(img) {
   return interpolate(TEMP_IMG_ITEM, img);
}

function getId(el) {
   return el.target.dataset.id;
}
