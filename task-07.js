const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text')
}
const changeFontSize = (e) => {
    const fontSize = +e.currentTarget.value;
    refs.textEl.style.fontSize = `${fontSize}px`
 }

 refs.inputEl.addEventListener('input', changeFontSize);
