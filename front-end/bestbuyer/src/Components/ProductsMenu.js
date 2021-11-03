import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';
import DropDown from './DropDown';
import '../Styles/DropDownProduct.css';

function ProductMenu() {
    const { dropDownProduct, setDropDownProduct } = useContext(appContext)

    const [product, setProduct] = useState(['products1', 'product2', 'product3'])

  return (
    <div>
      <DropDown
       value={dropDownProduct}
       change={setDropDownProduct}
       state={product}
       selectClass='drop-down-product'
       selectedClass='drop-down-product-option'
      /> 
    </div>
  );
}

export default ProductMenu;
