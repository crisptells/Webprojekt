import { Button, Card, CardContent, Container, Grid, Typography, Avatar, List, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import BookInstrument from '../../Components/BookInstrument';


function TestCheckout() {
    const instrument = {
        name : "Instrument",
        category : "test",
        instrumentId: "b57fb4fb-b817-4c36-b89d-5651ef6ecf76",
        user: "565ad6d7-f3fc-4af9-92e8-21e5676eb764"
    }

  return (

    <Container
      sx={{
        padding: "100px"
      }}>

      <BookInstrument
        instrument={instrument}
        bookingDuration = "30"
      ></BookInstrument>
    </Container>
  
  )
  
}

export default TestCheckout