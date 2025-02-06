import {Link} from 'react-router-dom'
import MyButton from '../UI/button/MyButton'
import { setAuth } from '../../generalstore/events'
const Navbar = () => {
  
  const handleLogout = () => {
    setAuth(false); // Устанавливаем состояние аутентификации в false
};
  return (
    <div className='navbar'>
       <MyButton onClick={handleLogout}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  )
}

export default Navbar