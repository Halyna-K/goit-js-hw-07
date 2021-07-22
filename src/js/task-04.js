const [decrementBtn, counterValue, incrementBtn] =
     document.querySelector("#counter").children;
const onDecrementClick = () => {
     counterValue.textContent--;
    };

const onIncrementClick = () => {
     counterValue.textContent++;
    };

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);
