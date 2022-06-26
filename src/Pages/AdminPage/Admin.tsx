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
            <a href='http://localhost:3000/admin/AllInstruments'>
                <ComplexButton buttonText="ALLE INSTRUMENTE" buttonImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dpo8UvgzoGUx-AVWXO75oCBsa1nxcUVw8Q&usqp=CAU'></ComplexButton>
            </a>
        </Grid>
        <Grid item xs={4}>
            <a href='http://localhost:3000/admin/AllInstruments'>
                <ComplexButton buttonText="AUSGELIEHENE INSTRUMENTE" buttonImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQna6KJhDKCLmNKk7ztq8qrPKii5-mVn3Lg&usqp=CAU"></ComplexButton>
            </a>
        </Grid>
        <Grid item xs={4}>
            <a href='http://localhost:3000/admin/AddInstrument'>
                <ComplexButton buttonText="INSTRUMENT HINZUFÜGEN" buttonImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNBuQQ8nw5V6LsAvcf4feG-nYpNia01qzGQ&usqp=CAU"></ComplexButton>
            </a>
        </Grid>
      </Grid>

    </Container>
    
  )
}
  
export default Admin