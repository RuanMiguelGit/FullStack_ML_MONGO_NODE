import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function RegisterCard() {
    const [nameRegister, setNameRegister] = useState('')
    const [emailRegister, setEmailRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')

  return (
    <div className='main-card-register'>
        <Input
            type='input'
            name='Nome'
            value={nameRegister}
            change={setNameRegister}
            inputclass='input-register'
        />
        <Input
            type='input'
            name='Email'
            value={emailRegister}
            change={setEmailRegister}
            inputclass='input-register'
        />
         <Input
            type='input'
            name='Senha'
            value={passwordRegister}
            change={setPasswordRegister}
            inputclass='input-register'
        />
        <Button
           Title='Registrar'
          onClick={() => console.log('ou')}
          Style='btn-register'
        />
    
    </div>
  );
}

export default RegisterCard;
