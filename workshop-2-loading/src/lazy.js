const isIntersecting = (entry) => {
  return entry.isIntersecting  // Es true si está dentro de la pantalla
}

const loadImage = (entry) => {
  const container = entry.target
  const image = container.firstChild
  const url = image.dataset.src
  image.src = url
}
const observer = new IntersectionObserver((allElements) => {
  allElements
    .filter(isIntersecting)
    .forEach(loadImage)
})


export const registerImage = (image) => {
  //Intersection Observer
  observer.observe(image)
}

