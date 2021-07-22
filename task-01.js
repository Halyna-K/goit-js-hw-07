const refs = {
    items:[...document.querySelectorAll('.item')],
    titles: document.querySelectorAll('h2')
};
console.log(refs.items, `У списку ${refs.items.length} категорії.`);

const showAmount =
    refs.titles.forEach( el =>
    console.log(`Категорія: ${el.textContent}
    Кількість елементів: ${el.parentNode.querySelectorAll('li').length}`));
