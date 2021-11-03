import { getData } from '../Service/ApiRequest'

export const getDataFromMercadoLivre = async () => {
    const data = await getData('https://api.mercadolibre.com/sites/MLB/categories')
    .then((res) => res.map(item => item.name))
    return data
}


