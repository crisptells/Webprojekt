import { OpenWithRounded } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, DialogContentText, Grid, RadioGroup, FormControlLabel, Radio, FormControl, TextField, Button, DialogActions } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

function ManageCheckout(props: any) {
  const { instrument, bookingDuration } = props;
  const [error, setError] = useState({ isError: false, msg: "No Error" });
  const [open] = useState(true);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

const bookInstrument = async () => {
  
  const today : Date = new Date();
  //Test
  const duration : number = 30;
  let returnDate : Date = new Date();
  returnDate.setDate(returnDate.getDate() + 30);
  let success: boolean = false;

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: instrument.user,
      instrumentId : instrument.instrumentId,
      bookingDate : today.toISOString().substring(0, 10),
      bookingDuration : bookingDuration
    }),
  };

  const response = await fetch(`http://localhost:8080/instruments/book`, requestOptions);
      if (!response.ok) {
        console.log("response war nicht ok :( ")
        setError({ isError: true, msg: `Fehler: ${response.statusText}` });
      } else if (response.ok) {
        setError({ isError: false, msg: "No error" });
        success = true;
      }
      
      if (success) {
        navigate("/success");
      }
    };

  const navigate = useNavigate();

  return (
    <Dialog
    open={open}
    scroll="paper"
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    fullWidth={true}
    maxWidth="sm"
    PaperProps={{
    }}
  >
    <DialogTitle id="scroll-dialog-title" className="text">
      Checkout: {instrument.name} ({instrument.category})
    </DialogTitle>
    <DialogContent dividers={true}>
      <DialogContentText id="scroll-dialog-description">
        
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <RadioGroup
                color="secondary"
                aria-label="paymentMethod"
                defaultValue="creditCard"
               
            >
              <FormControlLabel
                color="secondary"
                value="creditCard"
                control={<Radio />}
                label="Kreditkarte"
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="Paypal"
              />
              <FormControlLabel
                value="instantBankTransfer"
                control={<Radio />}
                label="Sofort??berweisung"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={1}>
            <div className="lineOfDivision" />
          </Grid>
        </Grid>
        {error.isError ? (
          <small style={{ color: "red" }}>
            Ein Fehler ist aufgetreten. Bitte ??berpr??fen Sie ihre Eingaben.
            Bei technischen Problemen wenden Sie sich bitte an den Admin
            dieser Website. {error.msg}
          </small>
        ) : null}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="secondary">Abbruch</Button>
      <Button color="secondary" onClick={handleSubmit(bookInstrument)}>
        Bezahlen
      </Button>
    </DialogActions>
  </Dialog>
  );
}

export default ManageCheckout;