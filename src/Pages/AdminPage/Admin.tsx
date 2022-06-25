import { Button, Card, Container, Grid, Stack } from "@mui/material"
import TextFieldComponent from '../../Components/TextFieldComponent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ComplexButton from "../../Components/ComplexButton";


function Admin() {

  return (

    <Container
      sx={{
        padding: "200px"
      }}>

      <Grid container spacing={2}>
        <Grid item xs={4}>
            <ComplexButton buttonText="ALLE INSTRUMENTE"></ComplexButton>
        </Grid>
        <Grid item xs={4}>
            <ComplexButton buttonText="AUSGELIEHENE INSTRUMENTE"></ComplexButton>
        </Grid>
        <Grid item xs={4}>
            <ComplexButton buttonText="INSTRUMENT HINZUFÜGEN"></ComplexButton>
        </Grid>
      </Grid>

    </Container>
    
  )
}
  
export default Admin