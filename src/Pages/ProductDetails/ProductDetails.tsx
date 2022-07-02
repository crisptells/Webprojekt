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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


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
        <Button onClick={() => navigate(-1)} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
      </Stack>

      <Grid container spacing={2}>
        <Grid item>
          <Stack spacing={2} direction="row" justifyContent="flex-start">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
            />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
          />
          </Stack>
        </Grid>
      </Grid>
      

      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Button variant="contained" startIcon={<ShoppingCartIcon />}>In den Warenkorb</Button>
      </Stack>
      

      
    </Container>
  
  )
  
}
  
export default ProductInfo