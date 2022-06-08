import { useState } from 'react'
import logo from './logo.svg'
import './Homepage.css'
import Instrument from '../Components/Instrument'
import { Button, Container, Grid, Table } from '@mui/material'
import MyButtonTest from '../Components/MyButtonTest'
import MyTableTest from '../Components/MyTableTest'
import NavBar from '../Components/NavBar'


function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <Container
      sx={{
        padding: "100px"
      }}
    >
      

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Instrument image="https://lifestyle-decor.de/images/product_images/original_images/Autodekor-Musik-Notenschluessel.png.png"></Instrument>
      </Grid>
      <Grid item xs={4}>
        <Instrument image="https://www.creativefabrica.com/wp-content/uploads/2020/05/13/guitar-in-the-circle-logo-Graphics-4113037-1.jpg"></Instrument>
      </Grid>
      <Grid item xs={4}>
        <Instrument image="https://www.creativefabrica.com/wp-content/uploads/2020/05/13/guitar-in-the-circle-logo-Graphics-4113037-1.jpg"></Instrument>
      </Grid>
      <Grid item xs={4}>
        <Instrument image="https://www.creativefabrica.com/wp-content/uploads/2020/05/13/guitar-in-the-circle-logo-Graphics-4113037-1.jpg"></Instrument>
      </Grid>
      
      <Grid item xs={12} textAlign='center'>
        <p>Impressum | Kontakt | Help</p>
      </Grid>
      
    </Grid>



    </Container>
  )

  

}

export default Homepage
