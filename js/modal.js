const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalFilm = document.querySelector('.modal__film');
const modalTitle = document.querySelector('.modal__title');
const modalText = document.querySelector('.modal__text');
const modalMeta = document.querySelector('.modal__meta');
const cards = document.querySelectorAll('.catalog__list .card');

const openModal = (card) => {
  const image = card.querySelector('.card__image');
  const film = card.querySelector('.card__film');
  const title = card.querySelector('.card__title');
  const text = card.querySelector('.card__text');
  const meta = card.querySelector('.card__meta');

  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modalFilm.textContent = film.textContent.trim();
  modalTitle.textContent = title.textContent;
  modalText.textContent = text.textContent;
  modalMeta.textContent = meta.textContent;

  modal.classList.add('modal--open');
};

const closeModal = () => {
  modal.classList.remove('modal--open');
};

cards.forEach((card) => {
  card.setAttribute('tabindex', '0');

  card.addEventListener('click', () => {
    openModal(card);
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      openModal(card);
    }
  });
});

modal.addEventListener('click', (event) => {
  if (event.target.dataset.close !== undefined) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
