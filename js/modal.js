const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalFilm = document.querySelector('.modal__film');
const modalTitle = document.querySelector('.modal__title');
const modalText = document.querySelector('.modal__text');
const modalMeta = document.querySelector('.modal__meta');
const modalRecipe = document.querySelector('.modal__recipe');
const servingsCount = document.querySelector('.modal__servings-count');
const servingsButtons = document.querySelectorAll('.modal__servings-button');
const cards = document.querySelectorAll('.catalog__list .card');

const minServings = 1;
const maxServings = 4;
let servings = minServings;

const updateServingsButtons = () => {
  servingsButtons.forEach((button) => {
    const direction = Number(button.dataset.direction);
    if (direction < 0) {
      button.disabled = servings <= minServings;
    } else {
      button.disabled = servings >= maxServings;
    }
  });
};

const updateIngredients = () => {
  const amounts = modalRecipe.querySelectorAll('.amount');

  amounts.forEach((amount) => {
    const baseAmount = Number(amount.dataset.amount);
    amount.textContent = baseAmount * servings;
  });
};

const openModal = (card) => {
  const image = card.querySelector('.card__image');
  const film = card.querySelector('.card__film');
  const title = card.querySelector('.card__title');
  const text = card.querySelector('.card__text');
  const meta = card.querySelector('.card__meta');
  const recipe = card.querySelector('.card__recipe');

  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modalFilm.textContent = film.textContent.trim();
  modalTitle.textContent = title.textContent;
  modalText.textContent = text.textContent;
  modalMeta.textContent = meta.textContent;
  modalRecipe.innerHTML = recipe ? recipe.innerHTML : '';

  servings = minServings;
  servingsCount.textContent = servings;
  updateServingsButtons();

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

servingsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    servings += Number(button.dataset.direction);
    servingsCount.textContent = servings;
    updateServingsButtons();
    updateIngredients();
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
