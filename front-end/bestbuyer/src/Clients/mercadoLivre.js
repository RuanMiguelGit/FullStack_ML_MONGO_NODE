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

export const FormatMercadoLivreProducts = async (...args) => {
    let description = args.map(item => item.results.map(item => item.description))
    let products = {
        "description":description
    }

    console.log('data', args)
    console.log(description)
    console.log('obj', products)
}

