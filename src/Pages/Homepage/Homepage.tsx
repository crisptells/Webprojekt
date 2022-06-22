import { useState } from 'react'
import Instrument from '../../Components/Instrument'
import { Button, Container, Grid, Table } from '@mui/material'
import { useQuery } from "react-query"


function Homepage() {
  const [count, setCount] = useState(0)

  const {data: instrumentsData}:any = useQuery("instruments", () => 
  fetch('http://localhost:8080/instruments').then((res)=>res.json())
);

console.log({instrumentsData})

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
          <Instrument image="https://static.vecteezy.com/ti/gratis-vektor/p1/3346549-klavier-logo-vorlage-illustration-design-symbol-vektor.jpg"></Instrument>
        </Grid>
        <Grid item xs={4}>
        <Instrument image="https://www.plot4u.de/images/artikel/0/000748w_x.jpg"></Instrument>    
        </Grid>

        <Grid item xs={4} textAlign='center'>
          <Button variant="contained" href={'http://localhost:3000/product-overview-guitar'}>Overview Page - Gitarren</Button>
        </Grid>
        <Grid item xs={4} textAlign='center'>
          <Button variant="contained" href={'http://localhost:3000/product-overview-piano'}>Overview Page - Klavier</Button>
        </Grid>
        <Grid item xs={4} textAlign='center'>
          <Button variant="contained" href={'http://localhost:3000/product-overview-drums'}>Overview Page - Schlagzeug</Button>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Homepage


