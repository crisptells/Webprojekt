import { Button, Card, CardContent, Container, Grid, Typography, Avatar, List, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import React from 'react'
import Instrument from '../../Components/Instrument'
import './ProductDetails.css'
<<<<<<< HEAD
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
=======
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

>>>>>>> 3788ee8631d32fd40afb45711454ce732b786827

function ProductDetails() {

  return (

    <Container
      sx={{
        padding: "100px"
      }}>

      <Stack spacing={2} direction="row" justifyContent="flex-start">
        <Button href={'http://localhost:3000/product-overview'} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
      </Stack>
    
      <p> </p>

      <Grid container rowSpacing={1} columnSpacing={2}>

        <Grid item xs={8}>
          <Card>
          <List sx={{ maxWidth: 1110, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{width:150, height: 150}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Harley Benton - TE-52"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Griffbrett: Ahorn <br/>
                      Korpus: amerikanische Esche <br/>
                      geschraubter Hals: kanadisher Ahorn <br/>
                    </Typography>
                    {"E-Gitarre (T-Modell) - 150€"}
                    <Stack direction="row" justifyContent="flex-end">
                    <IconButton color='primary'>
                        
                      </IconButton>
                    </Stack>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{width:150, height: 150}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/153580.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Harley Benton - TE-30"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Griffbrett: Ahorn <br/>
                      Korpus: Esche <br/>
                      geschraubter Hals: Ahorn <br/>
                    </Typography>
                    {"E-Gitarre (T-Modell) - 99€"}
                    <Stack direction="row" justifyContent="flex-end">
                    <IconButton color='primary'>
                        
                      </IconButton>
                    </Stack>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
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
                  2 Produkte 
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  € 250
                </Typography>
                </Grid>

                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  Lieferung 
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  € 10
                </Typography>
                </Grid>

                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  Gesamt 
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                  € 260
                </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <p></p>
          <Stack direction="column">
            <Button variant="contained" color="success" size='large' endIcon={<ShoppingBagIcon />}>Bestellen</Button>
          </Stack>
          
        </Grid>        
      </Grid>

      

    </Container>
  
  )
  
}
  
export default ProductDetails