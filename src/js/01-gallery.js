import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const listContainer = document.querySelector('.gallery');

const createPhotoCard = galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
            </a>
        `;

    }).join('');

listContainer.insertAdjacentHTML('beforeend', createPhotoCard);

let gallery = new SimpleLightbox('.gallery a', {
    
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

console.log(galleryItems);
