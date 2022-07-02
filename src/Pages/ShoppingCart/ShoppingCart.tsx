import { Button, Card, CardContent, Container, Grid, Typography, Avatar, List, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Stack, TextFieldProps } from '@mui/material'
import React, { JSXElementConstructor, ReactElement, useState } from 'react'

import './ShoppingCart.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Instrument from '../../Components/Instrument';
import ListItemComponent from '../../Components/ListItemComponent';
import InstrumentsTable from '../../Components/InstrumentsTable';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import ShoppingCardTable from '../../Components/ShoppingCardTable';
import { DatePicker } from '@mui/x-date-pickers';
import { useLocation } from 'react-router-dom';
import ShoppingCardItem from '../../Components/ShoppingCardItem';
import { getCookie } from '../../CookieHandler';
import { LtePlusMobiledataSharp } from '@mui/icons-material';


function ShoppingCard() {

  const navigate = useNavigate();
  const instrumentsData = null;
  let myArray: any[] = [];
  const {data: CartData}:any = useQuery("instruments", () => 
  fetch(`http://localhost:8080/instruments/getCart/${getCookie("userId")}`).then((res)=>res.json())
);

  const fetchInstrument = async (instrumentId : any) => {
    var response : any = null;
    var data : any = null;
    console.log(instrumentId);
    console.log("Für User: " + getCookie("userId"));
      response = await fetch(`http://localhost:8080/instruments/${instrumentId}`);
      data =await response.json();
      return(data);
  };

  const loop = () => {
    {CartData?.map((entry : any) => (
      myArray.push(fetchInstrument(entry.id))
    ))}
  }

  return (
    
    <Container
      sx={{
      padding: "100px"
      }}>
      
      <Stack spacing={2} direction="row" justifyContent="flex-start">
        <Button onClick={() => navigate(-1)} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
      </Stack>      

      <Grid container columnSpacing={2}>

        <Grid item xs={8}>
        {CartData?.map((entry : any) => (
          myArray.push(fetchInstrument(entry.id))
         ))}
          <ShoppingCardTable instrumentsData={myArray}></ShoppingCardTable>
        </Grid>

        <Grid item xs={4}>
          <Card >
            <CardContent>
              <Grid container rowSpacing={2} columnSpacing={22} >
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: 25 }} color="text.primary">
                      BESTELLÜBERSICHT
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  Gitarre
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  € 150
                </Typography>
                </Grid>

                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  Gesamt 
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  € 150
                </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <p></p>
          <Stack direction="column">
            <Button variant="contained" color="success" size='large' endIcon={<ShoppingBagIcon />} href="http://localhost:3000/checkout">Zur Kasse</Button>
          </Stack>


          
        </Grid>

        </Grid>
             
      

      
    </Container>
  
  )
  
}
  
export default ShoppingCard