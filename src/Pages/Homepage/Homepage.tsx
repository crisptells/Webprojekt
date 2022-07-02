import { useState } from 'react'
import Instrument from '../../Components/Instrument'
import { Button, Container, Grid, Stack, Table } from '@mui/material'
import { useQuery } from "react-query"
import ComplexButton from '../../Components/ComplexButton'
import InstrumentsTable from '../../Components/InstrumentsTable'
import DataButton from '../../Components/DataButton'
import '../../Pages/Homepage/Homepage.css'

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <Container
      sx={{
        padding: "100px"
      }}
    >
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack justifyContent={"center"} alignContent={"center"} alignItems={"center"} >
          <h1>Ivan's Instrumentenverleih</h1>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack justifyContent={"center"} alignContent={"center"} alignItems={"center"} >
           <img src="https://www.ivanpreabianca.com/img/logo.png" width={400} height={400}></img>
          </Stack>
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
          <ComplexButton buttonText="SCHLAGZEUGE" buttonImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_s7-PLlsIlnAcaMovOausyKkmDHVv1S9AA&usqp=CAU'></ComplexButton>
          </a>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Homepage


