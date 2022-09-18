// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import '../css/common.css';
import '../css/01-gallery.css';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const image = galleryItems.map(({preview, description, original}) => {
return `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`}).join("");

gallery.insertAdjacentHTML("beforeend", image); 
// Подключен клик и запрещен переход по ссылке
gallery.addEventListener("click", onGalleryClick, { once: true });

 function onGalleryClick(evt) {
    evt.preventDefault();       
    if(evt.target.nodeName !== "IMG") {
        return;
    }
  var lightbox = new SimpleLightbox('.gallery a', {captionType : "alt", captionsData : "alt", captionDelay : "250"});
}