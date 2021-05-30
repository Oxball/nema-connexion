const inputList = document.getElementsByTagName('input');
const classActive = 'form__label-placeholder--active';
const userID = [];

const onFocus = e => e.target.nextElementSibling.classList.add(classActive);

const onBlur = e => {
  if (e.target.value.length === 0) {
    e.target.nextElementSibling.classList.remove(classActive);
  }
};

for (let i = 0; i < 2; i++) {
  inputList[i].onfocus = onFocus;
  inputList[i].onblur = onBlur;
}

inputList[0].addEventListener('input', e => {
  if (e.data !== null) userID.push(e.data);
  else userID.pop();
  if (userID.join('') === "Laure") e.path[1].classList.add('form__label--valid');
  else e.path[1].classList.remove('form__label--valid');
});
