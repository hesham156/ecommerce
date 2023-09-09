import './nave.css'
import {Link} from 'react-router-dom'
const Nave = () => {
  return (
    <div>
      <Link to={'/login'}>login</Link>
      <Link to={'/cart'}>login</Link>
      <Link to={'/product'}>login</Link>
      <Link to={'/register'}>login</Link>
    </div>
  )
}

export default Nave
