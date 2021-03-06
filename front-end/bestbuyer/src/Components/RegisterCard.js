import React, { useEffect, useState } from 'react';
import { sendaData } from '../Service/ApiRequest';
import { useHistory } from 'react-router-dom';
import Message from './Message';
import Input from './Input';
import Button from './Button';

function RegisterCard() {
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [registrationError, setRegisterError] = useState([]);
  const [loading, setLoading] = useState(false)

  const history = useHistory();

  const data = {
    name: nameRegister,
    email: emailRegister,
    password: passwordRegister,
  };
  const url = 'https://api-lsbuy.herokuapp.com/user';

  useEffect(() => {
    if (userInfo.length !== 0) return history.push('/');
  }, [userInfo]);

  const registration = async (url, data) => {
    setLoading(true);
    await sendaData(url, data)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => {
        setRegisterError(error.response.data);
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
      <Message registrationError={registrationError} loading={loading} />
    </div>
  );
}

export default RegisterCard;
