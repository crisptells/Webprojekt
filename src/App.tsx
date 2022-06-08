import { useState } from 'react'
import { Button, Container, Grid, Table } from '@mui/material'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductOverview from './Pages/ProductOverview/ProductOverview'
import ProductDetails from './Pages/ProductDetails/ProductDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/product-overview' element={<ProductOverview/>}/>
        <Route path='/product-details' element={<ProductDetails/>}/>
      </Routes>
    </Container>
  )


}

export default App
