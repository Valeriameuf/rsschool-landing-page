const tabs = document.querySelectorAll('.catalog__tab');
const items = document.querySelectorAll('.catalog__item');
const moreButton = document.querySelector('.catalog__more');

let activeCategory = 'all';
let extraVisible = false;

const updateItems = () => {
  items.forEach((item) => {
    const isExtra = item.classList.contains('catalog__item--extra');

    if (activeCategory !== 'all') {
      item.style.display = item.dataset.category === activeCategory ? 'flex' : 'none';
    } else if (isExtra && !extraVisible) {
      item.style.display = 'none';
    } else {
      item.style.display = 'flex';
    }
  });

  moreButton.style.display = activeCategory === 'all' && !extraVisible ? 'inline-block' : 'none';
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((otherTab) => {
      otherTab.classList.remove('catalog__tab--active');
      otherTab.setAttribute('aria-pressed', 'false');
    });

    tab.classList.add('catalog__tab--active');
    tab.setAttribute('aria-pressed', 'true');
    activeCategory = tab.dataset.category;
    updateItems();
  });
});

moreButton.addEventListener('click', () => {
  extraVisible = true;
  updateItems();
});

updateItems();
