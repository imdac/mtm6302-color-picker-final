const swatches = [
  'red',
  'green',
  'blue',
  'purple',
  'orange',
  'magenta',
  'brown',
  'white'
]

const $color = document.getElementById('color')
const $name = document.getElementById('name')
const $swatches = document.getElementById('swatches')
const html = []

for (const swatch of swatches) {
  html.push(`
    <div 
      class="swatch" 
      style="background-color: ${swatch}">
    </div>`)
}

function setColor (color) {
  $color.style.backgroundColor = color
  $name.textContent = color
}

function getColor () {
  const color = localStorage.getItem('color')

  if (color) {
    setColor(color)
  }
}

getColor()

$swatches.innerHTML = html.join('')

$swatches.addEventListener('click', function (e) {
  if (e.target.classList.contains('swatch')) {
    const color = e.target.style.backgroundColor
    setColor(color)
    localStorage.setItem('color', color)
  }
})

$color.addEventListener('click', function () {
  $name.classList.toggle('show')
})
