const article = document.querySelector('.article')
const readMoreArticle = article.querySelector('.button--read-more')
const fChild = readMoreArticle.firstChild
console.log(readMoreArticle)
let readMoreArticleText = readMoreArticle.addEventListener(
  'click',
  function () {
    const articleText = article.querySelector('.article__text--hidden-part')
    let buttonIcon = document.createElement('div')
    buttonIcon.classList.add('button__icon')
    if (articleText.classList.contains('hidden')) {
      readMoreArticle.textContent = 'Скрыть'
      readMoreArticle.prepend(buttonIcon)
      buttonIcon.classList.add('button__icon--reverse');
    } else {
      readMoreArticle.textContent = 'Читать далее'
      readMoreArticle.prepend(buttonIcon)
      buttonIcon.classList.remove('button__icon--reverse')

    }
    articleText.classList.toggle('hidden')
  }
)
