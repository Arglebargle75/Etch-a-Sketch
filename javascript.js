function makeColumns (height) {
  const container = document.querySelector('.vertical-container')
  let divContent
  for (let i = 0; i < height; i++) {
    divContent = document.createElement('div')
    divContent.classList.add('column')
    container.appendChild(divContent)
  }
}
function makeRows (width) {
  const container = document.querySelectorAll('.column')
  let divContent
  for (let i = 0; i < container.length; i++) {
    for (let z = 0; z < width; z++) {
      divContent = document.createElement('div')
      divContent.classList.add('row')
      container[i].appendChild(divContent)
      divContent.addEventListener('mouseover', function (e) {
        this.style.background = 'Black'
      })
    }
  }
}
function makeGrid () {
  let dimensions = prompt('What dimensions? The limit is 100')
  while (dimensions > 100 || dimensions <= 0) {
    dimensions = prompt('Invalid dimensions. Try again.')
  }
  const container = document.querySelector('.vertical-container')
  container.innerHTML = ''
  makeColumns(dimensions)
  makeRows(dimensions)
}
makeColumns(16)
makeRows(16)
