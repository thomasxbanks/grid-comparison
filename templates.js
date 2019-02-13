console.log('templates.js loaded')
const main = document.querySelector('main')
const sections = main.querySelectorAll('section')
let content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dignissimos ex sequi, numquam reprehenderit quis.'
content = content.toLowerCase()
content = content.replace(/[,|\.]/g, '')
content = content.split(' ')
let contentlength = content.length

const generateContent = () => {
  let thisContent = []
  let randomLength = ~~(Math.floor(Math.random() * contentlength) + 2)
  for (var i = 0; i < randomLength; i++) {
    thisContent.push(content[i])
  }
  thisContent = thisContent.join(' ')
  thisContent = thisContent.charAt(0).toUpperCase() + thisContent.slice(1)
  return thisContent
}
const makeTemplate = (index) => {
  return `
    <article class="grid-item" data-priority="false">
      <h2>${index}</h2>
      <p>${generateContent()}.</p>
      <label for=""><input type="checkbox"> toggle priority</label>
    </article>
  `
}

sections.forEach((section) => {
  for (var i = 0; i < 10; i++) {
    section.innerHTML += makeTemplate(i + 1)
  }
})