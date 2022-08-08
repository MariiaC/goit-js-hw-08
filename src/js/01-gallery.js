import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

// Change code below this line

//console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = galleryItemsMarkup(galleryItems); //передаэмо галерею

galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);

function galleryItemsMarkup(items) {
   
    return items.map(({preview, original, description}) => {
    
    return `<div class="gallery__item">
    <a class='gallery__link' href='${original}'>
    <img class='gallery__image' src='${preview}' data-source='${original}'
    alt='${description}'/>
    </a>
    </div>`
    })
    .join('');
};

galleryRef.addEventListener('click', galleryRefAddContainerClick)

function galleryRefAddContainerClick(event) {
    
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();
    // console.log(event.target);
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`, {
        onShow: () => {
            window.addEventListener('keydown', keyDown)
        },
        onClose: () => {
            window.removeEventListener('keydown', keyDown)
        }
    }
    );
    function keyDown(event) {

        if (event.code === 'Escape') {
            instance.close()
        }
    }

instance.show()
}


