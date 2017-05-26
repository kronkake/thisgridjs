document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.getElementById('cat-container')
  for (let i = 0; i < 10; ++i) {
    let height = (Math.ceil(Math.floor((Math.random() * 400) + 100) / 100) * 100)
    let width = 300
    const img = document.createElement('img')
    img.src = `http://lorempixel.com/${width}/${height}/cats`
    imgs.appendChild(img)
  }
})
