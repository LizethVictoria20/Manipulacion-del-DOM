import { registerImage } from './lazy.js'
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// Crear imagen
// Agregar imagen en contenedor

const minimum = 1;
const maximum = 122;
const maxPhotos = 3

const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum)

for (let i = 0; i < maxPhotos; i++) {


  const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img')
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg` //TO DO
    imagen.className = 'rounded-2xl bg-gray-200'

    container.appendChild(imagen)

    return container;
  }

  const newImage = createImageNode()
  let mountNode = document.getElementById('app')
  mountNode.className = 'grid grid-cols-3 gap-4 pt-80 w-full'



  const addButton = document.getElementById('addNodo')
  addButton.className = 'bg-yellow-100 h-12 w-40 m-4 rounded-lg hover:bg-yellow-200 focus:outline-none'

  const deleteButton = document.getElementById('deleteNodo')
  deleteButton.className = 'bg-yellow-100 h-12 w-40 m-4 rounded-lg hover:bg-yellow-200 focus:outline-none'

  const addImage = () => {
    const newImage = createImageNode()
    mountNode.append(newImage)
    registerImage(newImage)
  }

  const deleteImage = () => {
    const nodoDeleted = document.getElementById('app')
    while (nodoDeleted.firstChild) {
      nodoDeleted.removeChild(nodoDeleted.firstChild);
    }
  }

  addButton.addEventListener('click', addImage)
  deleteButton.addEventListener('click', deleteImage)

}
