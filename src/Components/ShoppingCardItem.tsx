import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded';
import { useForm } from 'react-hook-form';
import { setCookie, getCookie } from '../CookieHandler';
import { convertLength } from '@mui/material/styles/cssUtils';


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

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({isError: false, msg: "No Error"});
  const {
      setValue,
      handleSubmit,
      formState: {errors},
      control,
  } = useForm();

  const {
    id,
    title,
    pictureLink,
    description,
    price,
    category,
    gesPrice

  } = props;

    const navigate = useNavigate();

    

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
          </Typography>
          <Stack direction="row" justifyContent="flex-end">
            <Grid>
              <Grid item xs={6}>
              </Grid>
              <Grid item xs={6}>
              <h3>{price}€</h3>   
              </Grid>
            </Grid>            
          </Stack>
        </React.Fragment>} />
    </ListItem></>
   
  );
}


