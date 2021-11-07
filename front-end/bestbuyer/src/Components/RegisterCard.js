import React, { useContext, useEffect, useState } from 'react';
import { sendaData } from '../Service/ApiRequest';
import { useHistory } from 'react-router-dom';
import Message from './Message';
import Input from './Input';
import Button from './Button';
import appContext from '../context/appContext';

function RegisterCard() {
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [registrationError, setRegisterError] = useState([]);
  const history = useHistory();

  const { loading, setLoading } = useContext(appContext)

  const data = {
    name: nameRegister,
    email: emailRegister,
    password: passwordRegister,
  };
  const url = 'http://localhost:3003/user';

  useEffect(() => {
    if (userInfo.length !== 0) return history.push('/');
  }, [userInfo]);

  const registration = async (url, data) => {
    setLoading(true);
    await sendaData(url, data)
      .then((res) => {
        setUserInfo(res.data);
        console.log('adas', userInfo);
      })
      .catch((error) => {
        setRegisterError(error.response.data);
        console.log('adasdasd', registrationError.message);
      });
    setLoading(false);
    clearUp();
  };

  const clearUp = () => {
    setNameRegister('');
    setEmailRegister('');
    setPasswordRegister('');
  };

  useEffect(() => {
    if (registrationError.length > 0) {
      setRegisterError([]);
    }
  }, [nameRegister, emailRegister]);

  return (
    <div className="main-card-register">
      <Input
        type="input"
        name="Nome"
        value={nameRegister}
        change={setNameRegister}
        inputclass="input-register"
      />
      <Input
        type="input"
        name="Email"
        value={emailRegister}
        change={setEmailRegister}
        inputclass="input-register"
      />
      <Input
        type="password"
        name="Senha"
        value={passwordRegister}
        change={setPasswordRegister}
        inputclass="input-register"
      />
      <Button
        Title="Registrar"
        onClick={() => registration(url, data)}
        Style="btn-register"
      />
      <Message registrationError={registrationError} />
    </div>
  );
}

export default RegisterCard;
