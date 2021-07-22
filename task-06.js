const inputEl = document.querySelector('#validation-input');

const inBlur = (e) => {
    e.currentTarget.value.length !== Number(inputEl.getAttribute('data-length'))?
    inputEl.setAttribute('class', 'invalid'):
    inputEl.setAttribute('class', 'valid')
}

inputEl.addEventListener('blur', inBlur);
