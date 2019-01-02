const textarea = document.querySelector('textarea');

const TIME_TO_CLEAR = 1000 * 20;
const KEY_CODE = {
  LEFT_ARROW: 37,
  UP_ARROW: 38
};

const debounce = (fn, wait) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, wait);
  };
};

const clearTextArea = () => textarea.value = '';

const focusTextArea = () => textarea.focus();

const keyCodeIsArrowToSelect = keyCode => keyCode === KEY_CODE.LEFT_ARROW || keyCode === KEY_CODE.UP_ARROW;

const preventTextSelection = (ev) => {
  if (keyCodeIsArrowToSelect(ev.keyCode)) {
    ev.preventDefault();
  }
};

textarea.addEventListener('keydown', preventTextSelection);
textarea.addEventListener('keyup', debounce(clearTextArea, TIME_TO_CLEAR));
textarea.addEventListener('blur', focusTextArea);

focusTextArea();
