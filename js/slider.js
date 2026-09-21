const track = document.querySelector('.slider__track');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');

const scrollByCard = (direction) => {
  const cardWidth = track.children[0].offsetWidth;
  track.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
};

nextButton.addEventListener('click', () => scrollByCard(1));
prevButton.addEventListener('click', () => scrollByCard(-1));
