const ctx = document.getElementById('canvas').getContext('2d');

const images = document.querySelectorAll('img')

images.forEach(image => {
  image.addEventListener('load', () => {
    ctx.drawImage(image, 0, 0, 1, 1)
    const pixelData = ctx.getImageData(0, 0, 1, 1).data
    const container = document.querySelector('body')

    image.addEventListener('mouseenter', () => {
      container.style.setProperty(
        '--image-color',
        `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`
      )
    })

    image.addEventListener('mouseleave', () => {
      container.style.setProperty(
        '--image-color',
        `#1b1b1b`
      )
    })
  })
})