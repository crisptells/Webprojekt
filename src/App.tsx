import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Instrument from './Components/Instrument'
import { Button, Container, Grid, Table } from '@mui/material'
import MyButtonTest from './Components/MyButtonTest'
import MyTableTest from './Components/MyTableTest'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container
      sx={{
        padding: "100px"
      }}
    >

    <Grid container spacing={2}>
      <Grid item xs>
       <MyButtonTest text="test"></MyButtonTest>
      </Grid>
      <Grid item xs>
        <MyButtonTest text="test"></MyButtonTest>
      </Grid>
      <Grid item xs={6}>
        <MyTableTest></MyTableTest>        
      </Grid>
    </Grid>
    </Container>
  )

}

export default App
