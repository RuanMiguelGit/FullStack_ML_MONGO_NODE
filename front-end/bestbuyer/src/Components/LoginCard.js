import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function LoginCard() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='main-card-login'>
        <Input
            type='input'
            name='Email'
            value={email}
            change={setEmail}
            inputclass='input-login'
        />
         <Input
            type='input'
            name='Senha'
            value={password}
            change={setPassword}
            inputclass='input-login'
        />
        <Button
           Title='Login'
          onClick={() => console.log('ou')}
          Style='btn-login'
        />
    
    </div>
  );
}

export default LoginCard;
