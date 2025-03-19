import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderMarkUp, simpleLightbox } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  gallerylist: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.btn-load-more'),
};

const itemsPerPage = 15;
let totalPages;
let currentPage;
let query;

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  currentPage = 1;
  refs.gallerylist.innerHTML = '';
  refs.loader.classList.add('is-visible');

  query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please fill out the request!',
      position: 'topRight',
    });

    clear(e);

    return;
  }

  try {
    const {
      data: { hits: images, totalHits },
    } = await fetchImages(query, currentPage);

    if (!images.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      clear(e);
      return;
    }

    totalPages = Math.ceil(totalHits / itemsPerPage);

    if (currentPage < totalPages) {
      refs.btnLoadMore.classList.add('is-visible');
    }

    // refs.gallerylist.innerHTML = renderMarkUp(images);
    // simpleLightbox.refresh();
    renderMarkUp(images, refs.gallerylist, simpleLightbox);

    e.target.elements['search-text'].value = '';
    currentPage += 1;

    const elemHeight = document
      .querySelector('.gallery-item')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: elemHeight * 2, // Scroll down by 2 times the element height
      left: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    refs.loader.classList.remove('is-visible');
  }
});

refs.btnLoadMore.addEventListener('click', async () => {
  refs.btnLoadMore.disabled = true;
  refs.loader.classList.add('is-visible');
  try {
    const {
      data: { totalHits, hits: images },
    } = await fetchImages(query, currentPage);

    // refs.gallerylist.insertAdjacentHTML('beforeend', renderMarkUp(images));
    // simpleLightbox.refresh();
    renderMarkUp(images, refs.gallerylist, simpleLightbox);

    if (currentPage === totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      refs.btnLoadMore.classList.remove('is-visible');
      return;
    }

    currentPage += 1;
    refs.btnLoadMore.classList.add('is-visible');
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });

    console.log(error.message);
  } finally {
    refs.loader.classList.remove('is-visible');
    refs.btnLoadMore.disabled = false;
  }
});

const clear = e => {
  refs.loader.classList.remove('is-visible');
  refs.btnLoadMore.classList.remove('is-visible');
  e.target.elements['search-text'].value = '';
};
