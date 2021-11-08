const axios = require('axios');

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
};
export const getData = async (url) => {
  const products = await axios
    .get(url, axiosConfig)
    .then((res) => res.data)
    .then((data) => data)
    .catch((err) => {
      console.log('Algo não funcionou', err);
    });

  return products;
};

export const sendaData = async (url, data) => {
  const response = await axios.post(url, data, axiosConfig);

  return response;
};
