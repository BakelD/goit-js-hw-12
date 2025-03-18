import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const getMarkUp = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) =>
  ` <li class="gallery-item">
        <div class="gallery-thumb"><a class="gallery-link" href="${largeImageURL}" ><img src="${webformatURL}" alt="${tags}"/></a></div>
        <div class="gallery-info-wrapper">
          <div class="gallery-info-box">
            <span class="gallery-info-data">Likes</span>
            <span class="gallery-info-amount">${likes}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Views</span>
            <span class="gallery-info-amount">${views}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Comments</span>
            <span class="gallery-info-amount">${comments}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Downloads</span>
            <span class="gallery-info-amount">${downloads}</span>
          </div>
        </div>
      </li>`;

export const renderMarkUp = items =>
  items.map(item => getMarkUp(item)).join('');

export const simpleLightbox = new SimpleLightbox('.gallery-link');
