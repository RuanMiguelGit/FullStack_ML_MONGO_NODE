import React, { useContext, useEffect, useState } from 'react';
import { getUserEmail, getUserName } from '../Service/LocalStorage';
import { sendaData } from '../Service/ApiRequest';
import appContext from '../context/appContext';
import Input from '../Components/Input';
import Button from '../Components/Button';
import '../Styles/SearchComponent.css';

function SearchComponent() {
  const [query, setQuery] = useState('')
  const { products, setFiltering, setFiltered } =
    useContext(appContext);

  const data = {
    name: getUserName(),
    email: getUserEmail(),
    searchItem: query,
  };
  const url = 'https://api-lsbuy.herokuapp.com/tracker';

  const trackCategories = async () => {
    await sendaData(url, data);
  };

  useEffect(() => {
    if (query === '') {
      setFiltering(false);
    }
  }, [query]);

  const findProducts = () => {
    let filter = '';
    trackCategories();

    if (query !== '') {
      filter = products.filter((item) =>
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(filter);
      setFiltering(true);
    }
  };

  return (
    <div className="search-holder">
      <Input
        type="input"
        name="Procurar produto"
        value={query}
        change={setQuery}
        inputclass="input-search"
      />
      <Button
        Style="btn-search"
        Title="Pesquisar"
        onClick={() => findProducts()}
      />
    </div>
  );
}

export default SearchComponent;
