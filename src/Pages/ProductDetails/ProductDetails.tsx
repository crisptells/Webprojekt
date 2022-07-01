import { Button, Card, CardContent, Container, Grid, Typography, Avatar, List, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import './ProductDetails.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Instrument from '../../Components/Instrument';
import ListItemComponent from '../../Components/ListItemComponent';
import InstrumentsTable from '../../Components/InstrumentsTable';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import ShoppingCardTable from '../../Components/ShoppingCardTable';


function ProductInfo() {

  const navigate = useNavigate();

  const {data: instrumentsData}:any = useQuery("instruments", () => 
  fetch('http://localhost:8080/instruments/getAllType/RENT').then((res)=>res.json())
  
);


  return (

    <Container
      sx={{
        padding: "100px"
      }}>

      <Stack spacing={2} direction="row" justifyContent="flex-start">
        <Button href={'http://localhost:3000/product-overview-guitar'} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
      </Stack>

      
    
      <p> </p>


      <Grid container columnSpacing={2}>

        <Grid item xs={8}>
         <ShoppingCardTable instrumentsData={instrumentsData}></ShoppingCardTable>
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
            <Button variant="contained" color="success" size='large' endIcon={<ShoppingBagIcon />}>Zur Kasse</Button>
          </Stack>
          
        </Grid>

        </Grid>
             
      

      
    </Container>
  
  )
  
}
  
export default ProductInfo