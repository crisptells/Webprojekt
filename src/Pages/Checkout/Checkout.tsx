import { Avatar, Button, Card, Container, Grid, Stack } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RadioButtonsGroup from "../../Components/RadioButtonGroup";
import RadioCheckout from "../../Components/RadioCheckout";
import PaymentIcon from '@mui/icons-material/Payment';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setCookie, getCookie } from "../../CookieHandler";
import { useQuery } from "react-query";



function Checkout() {

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
  
  const navigate = useNavigate();

  const {data: CartData}:any = useQuery("instruments", () => 
  fetch(`http://localhost:8080/instruments/getCart/${getCookie("userId")}`).then((res)=>res.json())
);
  console.log(getCookie("userId in Checkout"));
  console.log(CartData);



  const bookCart = async() => {
    var uName;
    for (let item of CartData) {
      handleSubmitClick(item.userId.id, item.instrumentId.id, null, 30);
      uName = item.userId.id;
    }
    clearCart(uName);
    navigate("/sucess");
  };

  const clearCart = async (userId:String) => {
    console.log(userId);
    const requestOptions = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ }),
    };
    const response = await fetch(`http://localhost:8080/instruments/return/${userId}`, requestOptions);
    if (!response.ok) {
        setError({isError: true, msg: `Fehler: ${response.statusText}`});
    } else if (response.ok) {
        const data: any = await response.json();
        setError({isError: false, msg: "No error"});
    }
};

  const handleSubmitClick = async (userId:String, instrumentId:String, bookingDate : any, bookingDuration: number) => {

      const requestOptions = {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            userId: userId,
            bookingDate: bookingDate,
            bookungDuration: bookingDuration,
            instrumentId: instrumentId 
          }),
      };
      const response = await fetch('http://localhost:8080/instruments/book', requestOptions);
      if (!response.ok) {
          setError({isError: true, msg: `Fehler: ${response.statusText}`});
      } else if (response.ok) {
          const data: any = await response.json();
          setError({isError: false, msg: "No error"});
      }
  };


  return (

    <Container
      sx={{
        padding: "200px"
      }}>

        <p> </p>

     <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack spacing={2} direction="row" justifyContent={"flex-start"}>
             <Button onClick={() => navigate(-1)} color="inherit" variant="outlined" startIcon={<ArrowBackIosNewIcon />}>Zurück</Button>
            </Stack>
          </Grid>

          <Grid item xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-start">
              <h3>Wählen Sie Ihre Zahlungsmethode!</h3>
          </Stack>
          </Grid>
          <Grid item xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-start">
              <RadioCheckout></RadioCheckout>
          </Stack>
          </Grid>
          <Grid item xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-start">
              <Button onClick={() => bookCart()} color="inherit" variant="outlined" startIcon={<PaymentIcon/>} >Bezahlen</Button>
          </Stack>
          </Grid>
      </Grid>
        


    </Container>
    
  )
}
  
export default Checkout