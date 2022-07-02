import { Button, Card, Container, Grid, Stack } from "@mui/material"
import TextField from "@mui/material"
import TextFieldComponent from '../../Components/TextFieldComponent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';



function Hilfe() {

  return (

    <Container
      sx={{
        padding: "200px"
      }}>

      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Stack spacing={2} direction="row" justifyContent={"flex-start"}>
             <Button href={'http://localhost:3000'} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <h2>Hilfe</h2>
      </Grid>

      <Grid item xs={12}>
        <p>E-Mail: <br/>
        luis.maier@gmx.de <br/>
        christian.reitmeier@outlook.com</p>
      </Grid>

      <Grid item xs={12}>
        <p></p>
      </Grid>

      <Grid item xs={12}>
        <p></p>
      </Grid>



      </Grid>
      
      
    </Container>
    
  )
  
}
  
export default Hilfe