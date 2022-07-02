import { OpenWithRounded } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, DialogContentText, Grid, RadioGroup, FormControlLabel, Radio, FormControl, TextField, Button, DialogActions } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

function ManageCheckout(props: any) {
  const { userId } = props;
  const [error, setError] = useState({ isError: false, msg: "No Error" });
  const [open] = useState(true);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

const bookInstrument = async () => {
  
  const today : Date = new Date();
  const duration : number = 30;
  let returnDate : Date = new Date();
  returnDate.setDate(returnDate.getDate() + 30);
  let success: boolean = false;

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    }),
  };

  const response = await fetch(`http://localhost:8080/instruments/getForUser/${userId}`, requestOptions);
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
    console.log("tmep")
  )
    
}

export default ManageCheckout;