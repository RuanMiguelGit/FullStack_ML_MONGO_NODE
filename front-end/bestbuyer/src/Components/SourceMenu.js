import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';
import DropDown from './DropDown';
import '../Styles/DropDownSource.css';

function SourceMenu() {
    const { dropDownSource, setDropDownSource } = useContext(appContext)

    const [source, setSource] = useState(['Mercado Livre', 'Busca Pé', 'Todas'])

  return (
    <div>
      <DropDown
       value={dropDownSource}
       change={setDropDownSource}
       state={source}
       selectClass='drop-down-source'
       selectedClass='drop-down-option'
      /> 
    </div>
  );
}

export default SourceMenu;
