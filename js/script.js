const figure = document.createElement('figcaption')
const img = document.createElement('img')
const title = document.createElement('figcaption')
const listBanners = document.querySelector('.list-banners')

figure.classList.add('wrapper-banner')

img.src = 'IMG//banner 1.png'
img.alt = 'Banner of the movie'
img.classList.add('main-banner')

title.textContent = 'Nome do filme'
title.classList.add('main-caption')

figure.insertAdjacentElement('beforeend', img)
figure.insertAdjacentElement('beforeend', title)

listBanners.insertAdjacentElement('beforeend', figure)
