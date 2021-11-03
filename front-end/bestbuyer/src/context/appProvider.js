import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function Provider({ children }) {
  const [query, setQuery] = useState('');
  const [dropDownSource, setDropDownSource] = useState('');
  const [dropDownProduct, setDropDownProduct] = useState('');


  
  const contextValue = {
    query,
    setQuery,
    dropDownSource,
    setDropDownSource,
    dropDownProduct,
    setDropDownProduct
  };

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
