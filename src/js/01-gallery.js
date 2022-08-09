import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

// Change code below this line

//console.log(galleryItems);

//код нижче просто вставляємо з домашки М7, завдання 2

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = galleryItemsMarkup(galleryItems); //передаэмо галерею

galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);

function galleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div>
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a> </div>
    `;
    })
    .join('');
}

 const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
