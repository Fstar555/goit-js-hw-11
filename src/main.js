// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotoFromPixabay } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';

const loader = document.querySelector('.loader');
const form = document.querySelector('.img-information');
const searchInput = document.querySelector('.input-img-name');

function showLoader() {
  loader.style.display = 'block';
}
function hideLoader() {
  loader.style.display = 'none';
}
//loader.classList.add('hidden');
