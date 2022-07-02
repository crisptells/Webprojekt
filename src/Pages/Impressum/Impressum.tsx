import { Button, Card, Container, Grid, Stack } from "@mui/material"
import TextField from "@mui/material"
import TextFieldComponent from '../../Components/TextFieldComponent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import '../../Pages/Impressum/Impressum.css';
import { useNavigate } from "react-router-dom";



function Impressum() {

  const navigate = useNavigate();

  return (

    <Container
      sx={{
        padding: "200px"
      }}>

      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Stack spacing={2} direction="row" justifyContent={"flex-start"}>
             <Button onClick={() => navigate('/')} color="inherit" variant="outlined" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <h2>Instrumentenverleih</h2>
      </Grid>

      <Grid item xs={12}>
        <h3>Impressum</h3>
        <p>Gründer/Entwickler: <br/>
            Luis Maier <br/>
            Christian Reitmeier
        </p>
      </Grid>

      <Grid item xs={12}>
        <h3>Kontakt:</h3>
        <p>Adresse: Coblitzallee 1-9, 68163 Mannheim <br/>
            Telefon: 123456789
        </p>
      </Grid>

      </Grid>
      
      
    </Container>
    
  )
  
}
  
export default Impressum