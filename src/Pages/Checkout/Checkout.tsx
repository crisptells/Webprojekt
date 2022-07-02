import { Avatar, Button, Card, Container, Grid, Stack } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RadioButtonsGroup from "../../Components/RadioButtonGroup";
import RadioCheckout from "../../Components/RadioCheckout";
import PaymentIcon from '@mui/icons-material/Payment';



function Checkout() {

  return (

    <Container
      sx={{
        padding: "200px"
      }}>

        <p> </p>

     <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack spacing={2} direction="row" justifyContent={"flex-start"}>
             <Button href={'http://localhost:3000'} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
            </Stack>
          </Grid>

          <Grid item xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-start">
              <h3>Wählen Sie Ihre Zahlungsmethode!</h3>
          </Stack>
          </Grid>
          <Grid item xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-start">
              <RadioCheckout></RadioCheckout>
          </Stack>
          </Grid>
          <Grid item xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-start">
              <Button href="http://localhost:3000/successful" startIcon={<PaymentIcon/>} variant="contained">Bezahlen</Button>
          </Stack>
          </Grid>
      </Grid>
        


    </Container>
    
  )
}
  
export default Checkout