const track = document.querySelector('.slider__track');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');

if (track) {
  const getStep = () => track.children[1].offsetLeft - track.children[0].offsetLeft;

  nextButton.addEventListener('click', () => {
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + getStep(), behavior: 'smooth' });
  });

  prevButton.addEventListener('click', () => {
    const atStart = track.scrollLeft <= 0;
    track.scrollTo({ left: atStart ? track.scrollWidth : track.scrollLeft - getStep(), behavior: 'smooth' });
  });
}
