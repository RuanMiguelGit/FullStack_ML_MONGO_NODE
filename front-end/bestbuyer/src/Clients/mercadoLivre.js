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
    .then((res) => console.log(res) )
    return  data
}

export const FormatMercadoLivreProducts = async (mercadoLivreProducts) => {
    console.log(mercadoLivreProducts)
}

