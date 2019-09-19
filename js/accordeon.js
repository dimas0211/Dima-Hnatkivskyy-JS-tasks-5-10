const accContainer = document.querySelector('.what-we-do__dropdown-main-container');
const dropdowns = [...accContainer.querySelectorAll('.what-we-do__dropdown-item')];
const image = document.querySelector('.what-we-do__person-picture');
const imageSource = ['./pics/photographer.png', './pics/bridge.png', './pics/everest-bg.png'];
let open = 0;

dropdowns.forEach((el, i) => {
  const header = el.querySelector('.what-we-do__dropdown-heading');
  const text = el.querySelector('.what-we-do__dropdown-textbox');
  if ( i === open ) {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }

  header.addEventListener('click', () => {
    open = i;
    dropdowns.forEach((item, index) => {
      if (open === index) {
        const currentStyle = item.querySelector('.what-we-do__dropdown-textbox').style.display;
        const action = currentStyle === 'none' ? 'block' : 'none';
        item.querySelector('.what-we-do__dropdown-textbox').style.display = action;
        image.src = imageSource[index];
      } else {
        item.querySelector('.what-we-do__dropdown-textbox').style.display = 'none';
      }
    });
  });
});
