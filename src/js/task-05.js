const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output')
}
const enterHandler = (e) => {
   e.currentTarget.value.trim() ?
   refs.outputEl.textContent = e.currentTarget.value :
   refs.outputEl.textContent = 'незнакомец';
 }
 refs.inputEl.addEventListener('input', enterHandler);
