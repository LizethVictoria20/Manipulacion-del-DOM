/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase = 'https://platzi-avo.vercel.app'
const appNode = document.querySelector('#container')
appNode.className = 'h-100 grid grid-rows-3 grid-flow-col gap-4 text-center'


const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-En', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return newPrice
}
// Web api
// Conectarse al servidor
window
  .fetch(`${urlBase}/api/avo`)
  // Procesa la respuesta y convertirla a JSON
  .then(response => response.json())
  // JSON -> Data -> Renderizar info en browser
  .then(responseJson => {
    const allItems = []
    responseJson.data.forEach(item => {
      //Crear imagen
      const img = document.createElement('img');
      img.src = `${urlBase}${item.image}`
      img.className = 'rounded-full w-2/4 m-auto'

      //Crear titulo
      const title = document.createElement('h2');
      title.textContent = item.name
      title.className = 'text-2xl text-gray-500'

      //Descripcion
      const description = document.createElement('p')
      description.textContent = item.attributes.description
      description.className = 'text-justify'

      //Crear precio
      const price = document.createElement('div');
      price.className = 'text-gray-500 text-xl p-1.5 text-pink-300'
      price.textContent = formatPrice(item.price)

      const container = document.createElement('div')
      container.className = 'bg-green-50 block m-8 rounded-md p-4 hover:bg-green-100 shadow-md cursor-pointer'
      container.append(img, title, price, description)
      allItems.push(container)
    });

    appNode.append(...allItems)
  })
