import RestApi from '../common/RestApi';

export const TEMP_NAME_ALBUM = document.getElementById('tempNameAlbum').innerHTML;
export const TEMP_IMG = document.getElementById('tempImg').innerHTML;
export const TEMP_FULL_IMG = document.getElementById('fullImg').innerHTML;
export const API_ALBUMS = 'https://jsonplaceholder.typicode.com/albums/';
export const API_IMG = 'https://jsonplaceholder.typicode.com/photos?albumId=';
export const listNameApi = new RestApi(API_ALBUMS);
export const imgApi = new RestApi(API_IMG);
export const containerEl = document.querySelector('.container');
export const listAlbumEl = document.querySelector('.list-albums');
export const listImgEl = document.querySelector('.album-list-img');
export const popupContentEl = document.querySelector('.popup-content');
export const popupEl = document.querySelector('.popup');
