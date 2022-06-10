import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Grid, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import ListItemComponent from '../../Components/ListItemComponent';


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
              <Button variant="contained" startIcon={<FilterAltIcon />}>Filter</Button>
              <Button variant="contained" startIcon={<FilterListIcon />}>Order</Button>
            </Stack>

          </Grid>

      </Grid>


    


    <List sx={{ width: '200%', maxWidth: 1110, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{width:150, height: 150}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Harley Benton - TE-52"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Griffbrett: Ahorn <br/>
                Korpus: amerikanische Esche <br/>
                geschraubter Hals: kanadisher Ahorn <br/>
              </Typography>
              {"E-Gitarre (T-Modell) - 150€"}
              <Stack direction="row" justifyContent="flex-end">
              <IconButton color='primary' onClick={() => navigate('/product-details')}>
                  <InfoIcon />
                </IconButton>
              </Stack>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{width:150, height: 150}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/153580.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Harley Benton - TE-30"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Griffbrett: Ahorn <br/>
                Korpus: Esche <br/>
                geschraubter Hals: Ahorn <br/>
              </Typography>
              {"E-Gitarre (T-Modell) - 99€"}
              <Stack direction="row" justifyContent="flex-end">
              <IconButton color='primary' onClick={() => navigate("/product-details")}>
                  <InfoIcon />
                </IconButton>
              </Stack>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar sx={{width:150, height: 150}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/511617.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jackson SLX DX"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Griffbrett: Lorbeer <br/>
                Korpus: Pappel <br/>
                Hals: Ahorn <br/>
              </Typography>
              {'E-Gitarre (ST-Modell) - 130€'}
              <Stack direction="row" justifyContent="flex-end">
              <IconButton color='primary' onClick={() => navigate("/product-details")}>
                  <InfoIcon />
                </IconButton>
              </Stack>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar sx={{width:150, height: 150}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/371679.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Harley Benton - GL-2NT"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Größe: 1/8 <br/>
                Decke: Fichte <br/>
                Korpus: Mahagoni <br/>
              </Typography>
              {"Konzertgitarre - 60€"}
              <Stack direction="row" justifyContent="flex-end">
              <IconButton color='primary' onClick={() => navigate("/product-details")}>
                  <InfoIcon />
                </IconButton>
              </Stack>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img width={150} height={150} src='https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/394726.jpg'/>
        </ListItemAvatar>
        <ListItemText
          primary="Startone CG-851"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Größe: 1/8 <br/>
                Korpus: Linde <br/>
                Hals: Nato <br/>
              </Typography>
              {"Konzertgitarre - 49€"}
              <Stack direction="row" justifyContent="flex-end">
              <IconButton color='primary' onClick={() => navigate("/product-details")}>
                  <InfoIcon />
                </IconButton>
              </Stack>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{width:150, height: 150}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/489975/15580910_800.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Startone GitarLele"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Größe: 1/8 <br/>
                Korpus: Linde <br/>
                Hals: Nato <br/>
              </Typography>
              {"Konzertgitarre - 75€"}
              <Stack direction="row" justifyContent="flex-end">
                <IconButton color='primary' onClick={() => navigate("/product-details")}>
                  <InfoIcon />
                </IconButton>
              </Stack>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItemComponent imgAlt="test" imgSrc="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/371679.jpg" 
      productName="Superflex HD" info1="info1" info2="info2" info3="info3" subtext="E-Gitarre Preis: 200000€"></ListItemComponent>
    </List>

          <Grid container spacing={2}>
            <Grid item xs={12} textAlign='center'>
                <p>Impressum | Kontakt | Help</p>
            </Grid>
          </Grid>

    </Container>
  );
}
