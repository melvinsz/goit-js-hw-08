// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const palletteContainer = document.querySelector('.gallery');
const cardPictures = createPicturesCards(galleryItems);
palletteContainer.insertAdjacentHTML('beforeend', cardPictures);

function createPicturesCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" /> </a></li>`;
    })
    .join('');
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: '250',
});
