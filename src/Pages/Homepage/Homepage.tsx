import { useState } from 'react'
import Instrument from '../../Components/Instrument'
import { Button, Container, Grid, Table } from '@mui/material'
import { useQuery } from "react-query"
import ComplexButton from '../../Components/ComplexButton'


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
          <a href='http://localhost:3000/product-overview-guitar'>
            <ComplexButton buttonText="GITARREN" buttonImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dpo8UvgzoGUx-AVWXO75oCBsa1nxcUVw8Q&usqp=CAU'></ComplexButton>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href='http://localhost:3000/product-overview-piano'>
            <ComplexButton buttonText="KLAVIERE" buttonImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuM71a818q3pxRpebExAA6u5gZ7JJtxih-g&usqp=CAU'></ComplexButton>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href='http://localhost:3000/product-overview-drums'>
          <ComplexButton buttonText="SCHLAGZEUG" buttonImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_s7-PLlsIlnAcaMovOausyKkmDHVv1S9AA&usqp=CAU'></ComplexButton>
          </a>
        </Grid>
        
      </Grid>

    </Container>
  )
}

export default Homepage


