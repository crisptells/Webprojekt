import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Grid, IconButton, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Line from './line';

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

      imgAlt,
      imgSrc,
      productName,
      info1,
      info2,
      info3,
      subtext,
      line

    } = props;

  return (

    <>
    <Line line={false} ></Line>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{ width: 150, height: 150 }} alt={imgAlt} src={imgSrc} />
      </ListItemAvatar>
      <ListItemText
        primary={productName}
        secondary={<React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {info1} <br />
            {info2} <br />
            {info3} <br />
          </Typography>
          {subtext}
          <Stack direction="row" justifyContent="flex-end">
            <IconButton color='primary' onClick={() => navigate('/product-details')}>
              <InfoIcon />
            </IconButton>
          </Stack>
        </React.Fragment>} />
    </ListItem></>

    
    
   
  );
}


