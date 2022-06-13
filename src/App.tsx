import { useState } from 'react'
import { Container} from '@mui/material'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductOverview from './Pages/ProductOverview/ProductOverview'
import Footer from './Components/Footer'
import ProductDetilas from './Pages/ProductDetails/ProductDetails'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'
import Account from './Pages/Account/Account'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/product-overview' element={<ProductOverview/>}/>
        <Route path='/shopping-cart' element={<ShoppingCart/>}/>
        <Route path='/product-details' element={<ProductDetilas/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
      <Footer/>
    </Container>
  )

}

export default App