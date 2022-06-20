import { Button, Card, CardContent, Container, Grid, Typography, Avatar, List, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import './ProductDetails.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Instrument from '../../Components/Instrument';
import ListItemComponent from '../../Components/ListItemComponent';

function ProductInfo() {

  return (

    <Container
      sx={{
        padding: "100px"
      }}>

      <Stack spacing={2} direction="row" justifyContent="flex-start">
        <Button href={'http://localhost:3000/product-overview-guitar'} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
      </Stack>
    
      <p> </p>

      <Grid container rowSpacing={1} columnSpacing={2}>

        <Grid item xs={8}>
          <Card>
          <ListItemComponent imgAlt="Harley Benton - TE-52" imgSrc="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg" 
            productName="Harley Benton - TE-52" info1="Griffbrett: Ahorn" info2="Korpus: amerikanische Esche" info3="geschraubter Hals: kanadisher Ahorn"
            subtext="E-Gitarre (T-Modell) - 150€"></ListItemComponent>
    
          </Card>
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
            <Button variant="contained" color="success" size='large' endIcon={<ShoppingBagIcon />}>In den Warenkorb</Button>
          </Stack>
          
        </Grid>        
      </Grid>

      
    </Container>
  
  )
  
}
  
export default ProductInfo