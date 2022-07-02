import { Avatar, Button, Card, Container, Grid, Stack } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import HomeIcon from '@mui/icons-material/Home';



function Successful() {

  return (

    <Container
      sx={{
        padding: "200px"
      }}>

      <Stack alignContent={"center"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
        <Avatar sx={{ m: 1, bgcolor: "green"}}>
                        <CheckCircleIcon />
        </Avatar>
        <h1>Erfolgreich bestellt!</h1>
        <Button startIcon={<HomeIcon/>} href="http://localhost:3000">Home</Button>
      </Stack>
        


    </Container>
    
  )
}
  
export default Successful