import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Card, Container, Grid, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import ListItemComponent from '../../Components/ListItemComponent';
import DialogSort from '../../Components/DialogSort';
import DialogFilter from '../../Components/DialogFilter';

export default function AlignItemsList() {
  
  const navigate = useNavigate();

  return (

    <Container
      sx={{
        padding: "100px"
      }}
    >
      
      <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack spacing={2} direction="row" justifyContent={"flex-start"}>
             <Button href={'http://localhost:3000'} variant="contained" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
            </Stack>
          </Grid>

          <Grid item xs={6}>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
              <DialogFilter/>
              <DialogSort/>
          </Stack>
          </Grid>
      </Grid>
    
    <List sx={{ width: '200%', maxWidth: 1110, bgcolor: 'background.paper' }}>
      <Card>
      <ListItemComponent imgAlt="Mapex Venus Fusion" imgSrc="https://www.kirstein.de/out/pictures/generated/product/1/1150_760_75/1a11060987c7ff49c024fd9ffacc9329_1.jpg" 
        productName="Mapex Venus Fusion" info1="Komplettes 5-teiliges Schlagzeug Set" info2="Mit kompletter Hardware" info3="Farbe: Steel Blue Metallic"
        subtext="Schlagzeug Komplett-Sets - 250€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent imgAlt="Mapex Venus Fusion" imgSrc="https://www.kirstein.de/out/pictures/generated/product/1/1150_760_75/1a11060987c7ff49c024fd9ffacc9329_1.jpg" 
        productName="Mapex Venus Fusion" info1="Komplettes 5-teiliges Schlagzeug Set" info2="Mit kompletter Hardware" info3="Farbe: Steel Blue Metallic"
        subtext="Schlagzeug Komplett-Sets - 250€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent imgAlt="Mapex Venus Fusion" imgSrc="https://www.kirstein.de/out/pictures/generated/product/1/1150_760_75/1a11060987c7ff49c024fd9ffacc9329_1.jpg" 
        productName="Mapex Venus Fusion" info1="Komplettes 5-teiliges Schlagzeug Set" info2="Mit kompletter Hardware" info3="Farbe: Steel Blue Metallic"
        subtext="Schlagzeug Komplett-Sets - 250€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent imgAlt="Mapex Venus Fusion" imgSrc="https://www.kirstein.de/out/pictures/generated/product/1/1150_760_75/1a11060987c7ff49c024fd9ffacc9329_1.jpg" 
        productName="Mapex Venus Fusion" info1="Komplettes 5-teiliges Schlagzeug Set" info2="Mit kompletter Hardware" info3="Farbe: Steel Blue Metallic"
        subtext="Schlagzeug Komplett-Sets - 250€"></ListItemComponent>
      </Card>
            

    </List>

    </Container>
  );
}
