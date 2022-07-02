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
import { useQuery } from 'react-query';
import InstrumentsTable from '../../Components/InstrumentsTable';

export default function AlignItemsList() {
  
  const navigate = useNavigate();

  const {data: instrumentsData}:any = useQuery("instruments", () => 
  fetch('http://localhost:8080/instruments/getAllType/Schlaginstrument').then((res)=>res.json())
);

  return (

    <Container
      sx={{
        padding: "100px"
      }}
    >
      
      <Grid container spacing={2}>
          <Grid item xs={6}>
          <Stack spacing={2} direction="row" justifyContent={"flex-start"}>
             <Button onClick={() => navigate('/')} color="inherit" variant="outlined" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
            </Stack>
            <p> </p>
          </Grid>

          <Grid item xs={6}>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
              <DialogFilter/>
              <DialogSort/>
          </Stack>
          </Grid>
      </Grid>
    
      <InstrumentsTable instrumentsData={instrumentsData}></InstrumentsTable>

    </Container>
  );
}
