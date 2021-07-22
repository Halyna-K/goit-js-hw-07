const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesList = document.querySelector('#gallery');

const createGalleryElement = images => {
  return images.map (image => {
  const imagesEl = document.createElement ('li');
  imagesEl.classList.add('gallery__item');
  imagesEl.insertAdjacentHTML('afterbegin', `<img src = ${image.url} alt = ${image.alt} width = "300">`);
  return imagesEl;
})}
const elements = createGalleryElement(images);
imagesList.append(...elements);
console.log(...elements);
