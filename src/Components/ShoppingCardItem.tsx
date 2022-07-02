import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Line from './Line';
import { CategorySharp, Description } from '@mui/icons-material';
import {setCookie} from "../CookieHandler";
import { useForm } from 'react-hook-form';


function line(props: any) {
  const {
    line
  } = props;

  if ({line}) {
      <Divider variant="inset" component="li" />
  } else {
    
  }
}


export default function ShoppingCardItem(props : any) {

    const navigate = useNavigate();

    const {

      title,
      pictureLink,
      description,
      price,
      category

    } = props;

    const render = () => {
      var text = description;
        return (
        <div>
            {text.split("\n").map((i:any,key:any) => {
                return <div key={key}>{i}</div>;
            })}
        </div>);
    };

        

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
            {category} 
            {render()}
          </Typography>
          <Stack direction="row" justifyContent="flex-end">
            <h3>{price}€</h3>            
          </Stack>
        </React.Fragment>} />
    </ListItem></>
    
   
  );
}


