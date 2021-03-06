import { useState } from 'react'
import { Container} from '@mui/material'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import ProductDetilas from './Pages/ProductDetails/ProductDetails'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'
import Account from './Pages/Account/Account'
import ProductOverviewGuitar from './Pages/Guitar/ProductOverviewGuitar'
import ProductOverviewPiano from './Pages/Piano/ProductOverviewPiano'
import ProductOverviewDrums from './Pages/Drums/ProductOverviewDrums'
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'

import Successful from './Pages/Successful/Successful'
import Checkout from './Pages/Checkout/Checkout'
import YourOrders from './Pages/YourOrders/YourOrders'
import TestCheckout from './Pages/Test/TestCheckout'
import MyBookedInstruments from './Pages/MyBookedInstruments/MyBookedInstruments'
import Hilfe from './Pages/Hilfe/Hilfe'
import Impressum from './Pages/Impressum/Impressum'
import Kontakt from './Pages/Kontakt/Kontakt'





function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/product-overview-guitar' element={<ProductOverviewGuitar/>}/>
        <Route path='/product-overview-piano' element={<ProductOverviewPiano/>}/>
        <Route path='/product-overview-drums' element={<ProductOverviewDrums/>}/>
        <Route path='/shopping-cart' element={<ShoppingCart/>}/>
        <Route path='/product-details' element={<ProductDetilas/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>

        <Route path='/sucess' element={<Successful/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/your-orders' element={<YourOrders/>}/>

        <Route path='/test' element={<TestCheckout/>}/>
        <Route path='/myBookedInstruments' element={<MyBookedInstruments/>}/>
        <Route path='/hilfe' element={<Hilfe/>}/>
        <Route path='/impressum' element={<Impressum/>}/>
        <Route path='/kontakt' element={<Kontakt/>}/>
        

      </Routes>
      <Footer/>
    </Container>
  )

}

export default App