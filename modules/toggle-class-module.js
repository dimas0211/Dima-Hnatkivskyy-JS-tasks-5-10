const toggleModule = {
  toggleClass: (target, item) => {
    if (window.pageYOffset === 0) {
      target.classList.remove(item);
    }  else {
      target.classList.add(item);
    }
  },
};

export default toggleModule;

