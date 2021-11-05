import React, { useContext, useEffect } from 'react';
import appContext from '../context/appContext';
import Input from '../Components/Input';
import Button from '../Components/Button';
import '../Styles/SearchComponent.css';

function SearchComponent() {
  const { query, setQuery, products, setFiltering, setFiltered } = useContext(appContext);


  useEffect(() => {
    if(query ===''){
      setFiltering(false)
    }
  }, [query]);

  const findProducts = () => {
    let filter = ''
    if(query !=='') {
      filter = products.filter(item =>
        (item.description[0].toUpperCase() + item.description.slice(1).toLowerCase()).includes(query))
        setFiltered(filter)
        setFiltering(true)
    }    
    
    }


  return (
    <div className="search-holder">
      <Input
        type="input"
        name="Procurar produto"
        value={ query }
        change={ setQuery }
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
