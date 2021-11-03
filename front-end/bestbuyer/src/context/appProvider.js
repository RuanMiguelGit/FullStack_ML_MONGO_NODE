import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function Provider({ children }) {

  const [wallValueWid, setWallValueWid] = useState([])
  const [wallValueHeig, setWallValueHeig] = useState([])
  const [doorValue, setDoorValue] = useState([])
  const [windowValue, setWindowValue] = useState([])

  const contextValue = {
    wallValueWid,
    wallValueHeig,
    doorValue,
    windowValue,
    setWallValueWid,
    setWallValueHeig,
    setDoorValue,
    setWindowValue
  };

  return (
    <appContext.Provider value={ contextValue }>
      {children}
    </appContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
