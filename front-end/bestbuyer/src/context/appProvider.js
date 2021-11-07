import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';
import  { getDataFromMercadoLivre, getProductsFromMercadoLivre, FormatMercadoLivreProducts } from '../Clients/mercadoLivre'


function Provider({ children }) {
  const [query, setQuery] = useState('');
  const [dropDownSource, setDropDownSource] = useState('Mercado Livre Brasil');
  const [dropDownProduct, setDropDownProduct] = useState('');
  const [mercadoLivre, setMercadoLivre] = useState([])
  const [mercadoLivreProduct, setMercadoLivreProduct] = useState([])
  const [products, setProducts] = useState([])
  const [filtering , setFiltering] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    getDataFromMercadoLivre(dropDownSource)
    .then(setMercadoLivre)
    setLoading(false)
  }, [dropDownSource]);

  useEffect(() => {
    setLoading(true)
    getProductsFromMercadoLivre(dropDownProduct, mercadoLivre, dropDownSource)
    .then(res => setMercadoLivreProduct(res.results))
    setLoading(false)
  }, [dropDownProduct]);

  useEffect(() => {
    setDropDownProduct('')
  }, [dropDownSource])

  useEffect(() => {
    setLoading(true)
    FormatMercadoLivreProducts(mercadoLivreProduct, dropDownProduct, dropDownSource)
    .then(res => setProducts(res))
    setLoading(false)
  }, [mercadoLivreProduct]);



  const contextValue = {
    query,
    setQuery,
    dropDownSource,
    setDropDownSource,
    dropDownProduct,
    setDropDownProduct,
    mercadoLivre,
    products,
    setProducts,
    filtering,
    setFiltering,
    filtered,
    setFiltered,
    loading,
  };

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
