import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import '../Styles/Logout.css'
import { clearUserInLocalStorage , getUserToken} from '../Service/LocalStorage';

function Logout() {

    const history = useHistory();
    const token = getUserToken()

    const logOut = () => {
        clearUserInLocalStorage()
        history.push('/login')
    }

    useEffect(() => {
        if (!token ) return history.push('/login');
      }, [token]); 

  return (
    <div>
        <Button
        Style="btn-logout"
        Title="Sair"
        onClick={() => logOut()}
      />
    </div>
  );
}

export default Logout;
