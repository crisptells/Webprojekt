import { useState } from 'react'
import { Button, Container, Grid, Table } from '@mui/material'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import Test from './Pages/Test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </Container>
  )


}

export default App
