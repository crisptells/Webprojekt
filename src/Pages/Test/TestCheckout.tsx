import { Button, Card, CardContent, Container, Grid, Typography, Avatar, List, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import BookInstrument from '../../Components/BookInstrument';


function TestCheckout() {
    const instrument = {
        name : "Instrument",
        category : "test",
        instrumentId: "b033804b-a725-4370-a142-111c17f46248"
    }

  return (

    <Container
      sx={{
        padding: "100px"
      }}>

      <BookInstrument
        instrument={instrument}
        user="c3eb8c2b-461f-4c37-bf24-dc424459ad5d"
      ></BookInstrument>
    </Container>
  
  )
  
}
  
export default TestCheckout