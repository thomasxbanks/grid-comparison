console.log('index.js loaded')

const articles = document.querySelectorAll('article')

const togglePriority = (el) => {
  el.dataset.priority = el.dataset.priority === "false" ? true : false
  msnry.layout();
}

articles.forEach((article) => {
  let checkbox = article.querySelector('input')
  checkbox.addEventListener('change', (event) => {
    togglePriority(event.target.parentElement.parentElement)
  })
})