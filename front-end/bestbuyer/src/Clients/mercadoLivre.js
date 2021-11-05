import { getData } from '../Service/ApiRequest'

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  let sources = {
    MLB:'Mercado Livre Brasil',
    MLU:'Mercado Livre Uruguai',
    MLA:'Mercado Livre Argentina',
    MLC:'Mercado Livre Chile',
    MPY:'Mercado Livre Paraguai',
}

export const getDataFromMercadoLivre = async (source) => {
    const origin = getKeyByValue(sources, source)
    const data = await getData(`https://api.mercadolibre.com/sites/${origin}/categories`)
    .then((res) => res.map(item => {
        return item
    }))
    return  data
}

export const getProductsFromMercadoLivre = async (productName, mercadoLivre, source) => {
    const origin = getKeyByValue(sources, source)
    let ProductId =''
    productName === '' ? ProductId = '':
    ProductId =  await mercadoLivre.find(item => item.name === productName).id
    const data = await getData(`https://api.mercadolibre.com/sites/${origin}/search?category=${ProductId}`)
    .then((res) => res )
    return  data
}


export const FormatMercadoLivreProducts = async (products, category, source) => {
    const origin = getKeyByValue(sources, source)
    let description = products.map(item => item.title)
    let image = products.map(item => item.thumbnail)
    let price = products.map(item => item.price)
    let currency  = products.map(item => item.currency_id)

    var obj = description.map((id, index) => {
        return {
          description: description[index],
          image: image[index],
          price: price[index],
          category:category,
          fonte:sources[origin],
          currency:currency[index],
          style:origin
        }
      });
      

    return obj
}

