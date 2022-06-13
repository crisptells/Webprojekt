import { Button, Card, Container, Grid, Stack } from "@mui/material"
import TextField from "@mui/material"
import TextFieldComponent from '../../Components/TextFieldComponent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';



function Account() {

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
        <br/>
        </Grid>
        <Grid item xs={12}>
            <TextFieldComponent textField="E-Mail"></TextFieldComponent>
        </Grid>
        <Grid item xs={12}>
            <TextFieldComponent textField="Passwort"></TextFieldComponent>
        </Grid>
        <Grid item xs={1.5}>
            <Button variant="contained" startIcon={<LoginIcon />}>Anmelden</Button>
        </Grid>
        <Grid item xs={10.5}>
            <Button variant="contained" startIcon={<AppRegistrationIcon />}>Registrieren</Button>
        </Grid>

      </Grid>
      
      
    </Container>
    
  )
  
}
  
export default Account

