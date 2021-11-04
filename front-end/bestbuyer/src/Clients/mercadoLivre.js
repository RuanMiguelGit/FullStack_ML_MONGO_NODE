import { getData } from '../Service/ApiRequest'

export const getDataFromMercadoLivre = async () => {
    const data = await getData('https://api.mercadolibre.com/sites/MLB/categories')
    .then((res) => res.map(item => {
        return item
    }))
    return  data
}

export const getProductsFromMercadoLivre = async (productName, mercadoLivre) => {
    let ProductId =''
    productName === '' ? ProductId = '':
    ProductId =  await mercadoLivre.find(item => item.name === productName).id
    const data = await getData(`https://api.mercadolibre.com/sites/MLB/search?category=${ProductId}`)
    .then((res) => res )
    return  data
}


export const FormatMercadoLivreProducts = async (products, category) => {
    let description = products.map(item => item.title)
    let image = products.map(item => item.thumbnail)
    let price = products.map(item => item.price)

    var obj = description.map((id, index) => {
        return {
          description: description[index],
          image: image[index],
          price: price[index],
          category:category,
          fonte:'Mercado Livre'
        }
      });
      

    return obj
}

