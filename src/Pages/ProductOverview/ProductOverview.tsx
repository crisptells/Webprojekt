import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';


export default function AlignItemsList(props : any) {

    const {
        text
    } = props;

  return (

    <Container
      sx={{
        padding: "100px"
      }}
    >

    <Stack spacing={2} direction="row" justifyContent="flex-end">
      <Button variant="text">{text}</Button>
      <Button variant="contained" startIcon={<FilterAltIcon />}>Filter</Button>
      <Button variant="contained" startIcon={<FilterListIcon />}>Order</Button>
    </Stack>


    <List sx={{ width: '200%', maxWidth: 1110, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{width:100, height: 100}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg" />
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
                Größe: 1/8 <br/>
                Korpus: Linde <br/>
                Hals: Nato <br/>
              </Typography>
              {"E-Gitarre (T-Modell)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{width:100, height: 100}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg" />
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
                Größe: 1/8 <br/>
                Korpus: Linde <br/>
                Hals: Nato <br/>
              </Typography>
              {"E-Gitarre (T-Modell)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar sx={{width:100, height: 100}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg" />
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
                Größe: 1/8 <br/>
                Korpus: Linde <br/>
                Hals: Nato <br/>
              </Typography>
              {'E-Gitarre (T-Modell)'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar sx={{width:100, height: 100}} alt="E-Gitarre" src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg" />
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
                Korpus: Linde <br/>
                Hals: Nato <br/>
              </Typography>
              {"E-Gitarre (T-Modell)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img width={100} height={100} src='https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/223985.jpg'/>
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
              {"E-Gitarre (T-Modell)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{width:100, height: 100}} alt="E-Gitarre" src="https://cdn-icons-png.flaticon.com/512/96/96421.png" />
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
              {"E-Gitarre (T-Modell)"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

          <Grid container spacing={2}>
            <Grid item xs={12} textAlign='center'>
                <p>Impressum | Kontakt | Help</p>
            </Grid>
          </Grid>

    </Container>
  );
}
