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
      <ListItemComponent imgAlt="KAWAI Flügel GX-2" imgSrc="https://pianohaus-atzert.de/fileadmin/_processed_/9/5/csm_Kawai_Gx_2_ec6f7c3289.jpg" 
        productName="KAWAI Flügel GX-2" info1="Höhe: 102cm" info2="Breite: 152cm" info3="Tiefe: 180cm"
        subtext="Klavier (Flügel) - 350€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent imgAlt="KAWAI Flügel GX-2" imgSrc="https://pianohaus-atzert.de/fileadmin/_processed_/9/5/csm_Kawai_Gx_2_ec6f7c3289.jpg" 
        productName="KAWAI Flügel GX-2" info1="Höhe: 102cm" info2="Breite: 152cm" info3="Tiefe: 180cm"
        subtext="Klavier (Flügel) - 350€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent imgAlt="KAWAI Flügel GX-2" imgSrc="https://pianohaus-atzert.de/fileadmin/_processed_/9/5/csm_Kawai_Gx_2_ec6f7c3289.jpg" 
        productName="KAWAI Flügel GX-2" info1="Höhe: 102cm" info2="Breite: 152cm" info3="Tiefe: 180cm"
        subtext="Klavier (Flügel) - 350€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent imgAlt="KAWAI Flügel GX-2" imgSrc="https://pianohaus-atzert.de/fileadmin/_processed_/9/5/csm_Kawai_Gx_2_ec6f7c3289.jpg" 
        productName="KAWAI Flügel GX-2" info1="Höhe: 102cm" info2="Breite: 152cm" info3="Tiefe: 180cm"
        subtext="Klavier (Flügel) - 350€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent imgAlt="KAWAI Flügel GX-2" imgSrc="https://pianohaus-atzert.de/fileadmin/_processed_/9/5/csm_Kawai_Gx_2_ec6f7c3289.jpg" 
        productName="KAWAI Flügel GX-2" info1="Höhe: 102cm" info2="Breite: 152cm" info3="Tiefe: 180cm"
        subtext="Klavier (Flügel) - 350€"></ListItemComponent>
      </Card>      

    </List>

    </Container>
  );
}
