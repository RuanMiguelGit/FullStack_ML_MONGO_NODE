import React, { useState, useEffect } from 'react';
import { sendaData } from '../Service/ApiRequest';
import { saveUserInLocalStorage } from '../Service/LocalStorage';
import { useHistory } from 'react-router-dom';
import Message from './Message';
import Input from './Input';
import Button from './Button';

function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInfo, setLoginInfo] = useState([]);
  const [loginError, setLoginError] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const data = {
    email: email,
    password: password,
  };
  const url = 'http://localhost:3003/login';

  const login = async (url, data) => {
    setLoading(true);
    await sendaData(url, data)
      .then((res) => {
        setLoginInfo(res.data);
        saveUserInLocalStorage(res.data);
      })
      .catch((error) => {
        setLoginError(error.response.data);
      });
    setLoading(false);
    clearUp();
  };

  const clearUp = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (loginInfo.length !== 0) return history.push('/main');
  }, [loginInfo]);

  useEffect(() => {
    if (loginError.length > 0) {
      setLoginError([]);
    }
  }, [email, password]);

  return (
    <div className="main-card-login">
      <Input
        type="input"
        name="Email"
        value={email}
        change={setEmail}
        inputclass="input-login"
      />
      <Input
        type="input"
        name="Senha"
        value={password}
        change={setPassword}
        inputclass="input-login"
      />
      <Button
        Title="Login"
        onClick={() => login(url, data)}
        Style="btn-login"
      />
      <Button
        Title="Cadastre-se"
        onClick={() => history.push('/register')}
        Style="btn-register-login"
      />
      <Message registrationError={loginError} loading={loading} />
    </div>
  );
}

export default LoginCard;
