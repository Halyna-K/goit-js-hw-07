const refs = {
    inputEl: document.querySelector(' input'),
    createBtn: document.querySelector(' button'),
    deleteBtn: document.querySelector(' button')
}
const onInput = (e) => {
  console.log(e.currentTarget.value);
}

const onCreateBtnClick = (e) => {
    //  e.preventDefault();
     console.log('create', e.currentTarget.dataset('render'));
     };

 const onDeleteBtnClick = (e) => {
     console.log('remove', e.currentTarget.dataset);
     };
refs.inputEl.addEventListener('change', onInput)
refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.deleteBtn.addEventListener('click', onDeleteBtnClick);

// console.log(actions[0].dataset);
//      document.querySelector("#controls").children;
