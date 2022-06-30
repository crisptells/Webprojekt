import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid, IconButton, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Line from './Line';

function line(props: any) {
  const {
    line
  } = props;

  if ({line}) {
      <Divider variant="inset" component="li" />
  } else {
    
  }
}

export default function ListItemComponent(props : any) {

    const navigate = useNavigate();

    const {

      title,
      pictureLink,
      description,
      price,
      category

    } = props;

  return (

    <>
    
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
       <Avatar sx={{ width: 150, height: 150 }} alt={title} src={pictureLink} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={<React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {category} <br />
            {description} <br />
          </Typography>
          <Stack direction="row" justifyContent="flex-end">
            <Grid>
              <Stack>
              <Grid item xs={12}>
                <h3>{price}€</h3>
              </Grid>
              </Stack>
              
              <Grid item xs={12}>
                <Button variant="contained" color="success" size='large' onClick={() => navigate('/product-details')} endIcon={<InfoIcon />}>Mehr Inforamtionen</Button>
              </Grid>           
            </Grid>
            
          </Stack>
        </React.Fragment>} />
    </ListItem></>
    
   
  );
}


