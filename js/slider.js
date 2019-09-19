const firstSlider = document.querySelector('.slider-section__container');
const secondSlider = document.querySelector('.slider-section-with-image');
const counters = [0, 0];
const sliders = [firstSlider, secondSlider];

const moveSlides = (allSlides, index) => {
  if (allSlides.length - 1 < counters[index]) {
    counters[index] = 0;
  } else if (counters[index] < 0) {
    counters[index] = allSlides.length - 1;
  }
  allSlides.forEach((e, i) => {
    const action = i !== counters[index] ? 'none' : 'flex';
    e.style.display = action;
  });
};

sliders.forEach((el, index) => {
  const prev = el.querySelector('.slider__prev');
  const next = el.querySelector('.slider__next');
  const allSlides = [...el.querySelectorAll('.slider__container')];
  moveSlides(allSlides, index);
  next.addEventListener('click', () => {
    counters[index] = counters[index] + 1;
    moveSlides(allSlides, index);
  });

  prev.addEventListener('click', () => {
    counters[index] = counters[index] - 1;
    moveSlides(allSlides, index);
  });
});
