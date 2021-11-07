import React, { useContext, useEffect } from 'react';
import { getUserEmail, getUserName } from '../Service/LocalStorage';
import { sendaData } from '../Service/ApiRequest';
import appContext from '../context/appContext';
import DropDown from './DropDown';
import '../Styles/DropDownProduct.css';

function ProductMenu() {
  const { dropDownProduct, setDropDownProduct, mercadoLivre } =
    useContext(appContext);

  const data = {
    name: getUserName(),
    email: getUserEmail(),
    searchItem: dropDownProduct,
  };
  const url = 'http://localhost:3003/tracker';

  const trackCategories = async () => {
    await sendaData(url, data);
  };

  useEffect(() => {
    trackCategories();
  }, [dropDownProduct]);

  return (
    <div>
      <DropDown
        value={dropDownProduct}
        change={setDropDownProduct}
        state={mercadoLivre.map((item) => item.name)}
        selectClass="drop-down-product"
        selectedClass="drop-down-product-option"
      />
    </div>
  );
}

export default ProductMenu;
