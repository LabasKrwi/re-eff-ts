import { FC, useState } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { setAuth } from '../generalstore/events';
const Login: FC = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = () => {
    if (login === '123' && password === '123'){
      setAuth(true);
    }
  };



  return (
    <div>
        <h1>Страница для логина</h1>
        <form onSubmit={handleLogin}>
            <MyInput type='text' onChange={(e) => setLogin(e.target.value)} placeholder='Введите логин'></MyInput>
            <MyInput type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Введите пароль'></MyInput>
            <MyButton onClick={handleLogin} children='Войти'/>
        </form>
    </div>
  )
}

export default Login