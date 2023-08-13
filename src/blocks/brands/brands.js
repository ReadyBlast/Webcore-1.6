import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper', {
  enabled: true,
  observer: true,
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  clickable: true,
  breakpoints: {
    768: {
      enabled: false
    }
  },

  pagination: {
    el: '.swiper__pagination',
    clickable: true
  }
})

// Swiper button click

const swiperBlock = document.querySelector('.swiper__block')
const swiperWrapper = swiperBlock.querySelector('.swiper-wrapper')
const readMore = swiperBlock.querySelector('.button--read-more')
const buttonIcon = readMore.querySelector('.button__icon')
const readMoreText = readMore.querySelector('.button__text')

let readMoreContent = readMore.addEventListener('click', function () {
  let isContentHide = swiperWrapper.classList.toggle(
    'swiper-wrapper--hide-content'
  )
  if (!isContentHide) {
    swiperWrapper.classList.remove('swiper-wrapper--hide-content')
    readMoreText.textContent = 'Скрыть'
    buttonIcon.classList.add('button__icon--reverse')
  } else {
    swiperWrapper.classList.add('swiper-wrapper--hide-content')
    swiperWrapper.classList.remove('swiper-wrapper--max-height')
    readMoreText.textContent = 'Показать все'
    buttonIcon.classList.remove('button__icon--reverse')
  }
})
