import { Avatar, Button, Card, Container, Grid, Stack } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import HomeIcon from '@mui/icons-material/Home';
import Confetti from 'react-confetti'



function Successful() {
  //const { width, height } = useWindowSize()

  return (
    

    <Container
      sx={{
        padding: "200px"
      }}>
        <Confetti/>
        
      <Stack alignContent={"center"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
        <Avatar sx={{ m: 1, bgcolor: "green"}}>
                        <CheckCircleIcon />
        </Avatar>
        <h1>Erfolgreich bestellt!</h1>
        <p>Ihre Bestellung ist bei uns eingegangen, du kannst dein Instrument jederzeit in der Filialie abholen.</p>
        <Button startIcon={<HomeIcon/>} href="http://localhost:3000">Home</Button>
      </Stack>
        


    </Container>
    
  )
}
  
export default Successful