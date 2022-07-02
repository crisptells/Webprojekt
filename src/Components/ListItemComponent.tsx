import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../Components/css/ListItemComponent.css'
import { color } from '@mui/system';

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


  const {
    setValue,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm();

  const {

    userId,
    instrumentId

  } = props;

  const handleSubmitClick = async () => {
    
    const userIdString : String = userId;
    const instrumentIdString : String = instrumentId;

    console.log(userId);
    console.log(instrumentId);
    const requestOptions = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          userId : userIdString,
          instrumentId : instrumentIdString
        }),
    };
    const response = await fetch('http://localhost:8080/instruments/putInCart', requestOptions);
    if (!response.ok) {
      console.log("nicht ok")
    } else if (response.ok) {
        const data: any = await response.json();
        console.log("ok")
    }
  };

    const navigate = useNavigate();

    const {
      
      title,
      pictureLink,
      description,
      price,
      category

    } = props;

    const instrument = {
      title: { title },
      pictureLink: { pictureLink },
      description: {description},
      price: {price},
      category: {category}
    }

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
    
    <ListItem alignItems="flex-start" sx={{ backgroundColor: "#f2f2f2" }}>
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
            <Grid>
              <Stack>
              <Grid item xs={12}>
                <h3>{price}€</h3>
              </Grid>
              </Stack>
              
              <Grid item xs={12}>
               <Button onClick={handleSubmit(handleSubmitClick)} color="inherit" variant="outlined">test</Button>
              </Grid>       
            </Grid>
            
          </Stack>
        </React.Fragment>} />
    </ListItem></>
    
   
  );
}



