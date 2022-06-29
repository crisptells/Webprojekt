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
      <ListItemComponent title="Harley Benton - TE-52" imgSrc="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg" 
        productName="Harley Benton - TE-52" description="Griffbrett: Ahorn" info2="Korpus: amerikanische Esche" info3="geschraubter Hals: kanadisher Ahorn"
        subtext="E-Gitarre (T-Modell) - 150€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent title="Harley Benton - TE-30" imgSrc="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/153580.jpg" 
        productName="Harley Benton - TE-30" description="Griffbrett: Ahorn" info2="Korpus: Esche" info3="geschraubter Hals: Ahorn"
        subtext="E-Gitarre (T-Modell) - 99€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent title="Jackson SLX DX" imgSrc="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/511617.jpg" 
        productName="Jackson SLX DX" description="Griffbrett: Lorbeer" info2="Korpus: Pappel" info3="Hals: Ahorn"
        subtext="E-Gitarre (ST-Modell) - 130€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent title="Harley Benton - GL-2NT" imgSrc="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/371679.jpg" 
        productName="Harley Benton - GL-2NT" description="Größe: 1/8 " info2="Decke: Fichte" info3="Korpus: Mahagoni"
        subtext="Konzertgitarre - 60€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent title="Startone CG-851" imgSrc="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/394726.jpg" 
        productName="Startone CG-851" description="Größe: 1/8" info2="Korpus: Linde" info3="Hals: Nato"
        subtext="Konzertgitarre - 75€"></ListItemComponent>
      </Card>
      <br/>
      <Card>
      <ListItemComponent title="Startone GitarLele" imgSrc="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/371679.jpg" 
        productName="Startone GitarLele" description="Größe: 1/8" info2="Korpus: Linde" info3="Hals: Nato"
        subtext="Konzertgitarre - 75€"></ListItemComponent>
      </Card>

    </List>

    </Container>
  );
}
