import { Button, Card, CardContent, Container, Grid, Typography, Avatar, List, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Instrument from '../../Components/Instrument';
import ListItemComponent from '../../Components/ListItemComponent';
import InstrumentsTable from '../../Components/InstrumentsTable';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import ShoppingCardTable from '../../Components/ShoppingCardTable';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OrderTable from '../../Components/OrderTable';


function YourOrders() {

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
        <Button onClick={() => navigate('/')} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
      </Stack>

      <br/>
      <h4>Ihre Bestellungen:</h4>
      <br/>

      <Grid item xs={8}>
         <OrderTable instrumentsData={instrumentsData}></OrderTable>
        </Grid>
      

      
    </Container>
  
  )
  
}
  
export default YourOrders