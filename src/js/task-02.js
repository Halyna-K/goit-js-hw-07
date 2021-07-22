const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map( ingredient => {
  const el = document.createElement('li');el.textContent = ingredient;
 return el; })
 ingredientsList.append(...elements);
