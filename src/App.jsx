import {Cart, Home, LoginIn, Product, Register} from './pages/Pages'
import {Nave} from './component/Components'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      <Nave/>
      <Routes>
      <Route path='/' element={<Home/>}/>   
      <Route path='/cart' element={<Cart/>}/>   
      <Route path='/login' element={<LoginIn/>}/>   
      <Route path='/register' element={<Register/>}/>   
      <Route path='/product' element={<Product/>}/>   

      </Routes>
       
    </>
  )
}

export default App
