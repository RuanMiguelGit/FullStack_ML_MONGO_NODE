import React, { useContext } from 'react';
import appContext from '../context/appContext';
import Input from '../Components/Input';
import Button from '../Components/Button';
import '../Styles/SearchComponent.css';

function SearchComponent() {
  const { query, setquery } = useContext(appContext);
  return (
    <div className="search-holder">
      <Input
        type="input"
        name="Procurar produto"
        value={ query }
        change={ setquery }
        inputclass="input-search"
      />
      <Button
        Style="btn-search"
        Title="Pesquisar"
        onClick={() => console.log('Okay')}
      />
    </div>
  );
}

export default SearchComponent;
