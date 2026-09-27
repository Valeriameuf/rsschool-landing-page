const track = document.querySelector('.slider__track');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');

const scrollByCard = (direction) => {
  const cardWidth = track.children[0].offsetWidth;
  track.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
};

const updateButtons = () => {
  const maxScrollLeft = track.scrollWidth - track.clientWidth;

  prevButton.disabled = track.scrollLeft <= 0;
  nextButton.disabled = track.scrollLeft >= maxScrollLeft - 1;
};

nextButton.addEventListener('click', () => scrollByCard(1));
prevButton.addEventListener('click', () => scrollByCard(-1));
track.addEventListener('scroll', updateButtons);

updateButtons();
