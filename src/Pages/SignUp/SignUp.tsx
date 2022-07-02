import React, { useState } from "react";
import {Avatar, Box, Button, Container, Grid, IconButton, Link, TextField, Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useNavigate} from "react-router-dom";
import "./SignUp.css";
import { useForm, Controller } from "react-hook-form";
import { setCookie } from "../../CookieHandler";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import md5 from "md5";

function SignUp() {
    const [userName, setUserName]: any = useState("");
    const [firstName, setFirstName]: any = useState("");
    const [lastName, setLastName]: any = useState("");
    const [email, setEmail]: any = useState("");
    const [password, setPassword]: any = useState("");
    const [confirmPassword, setConfirmPassword]: any = useState("");
    const [street, setStreet]: any = useState("");
    const [number, setNumber]: any = useState("");
    const [plz, setPlz]: any = useState("");
    const [city, setCity]: any = useState("");
    const [isLoading, setIsLoading]: any = useState(false);
    const [error, setError]: any = useState({ isError: false, msg: "No Error" });
    const [agree, setAgree]: any = useState(false);
  
    const {
      setValue,
      handleSubmit,
      formState: { errors },
      control,
    } = useForm();
  
    const redirectToHome = () => {
      navigate("/");
    };
  
    const redirectToLogin = () => {
      navigate("/Login");
    };
  
    const handleSubmitClick = async () => {
      let redirectHome: boolean = false;
      
  
      if (password === confirmPassword) {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName: userName,
            firstName: firstName,
            name: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,            
          }),
        };
        const response = await fetch(`http://localhost:8080/users/register`, requestOptions);
        if (!response.ok) {
          console.log("nicht okay!")
          setError({ isError: true, msg: `Fehler: ${response.statusText}` });
          setAgree(false);
        } else if (response.ok) {
          console.log("okay!")
          const data: any = await response.json();
          setError({ isError: false, msg: "No error" });
          setCookie("userId", data.id, 7);
          redirectHome = true;
        }
        
        if (redirectHome) {
          redirectToHome();
        }
      } else {
        setError({
          isError: true,
          msg: "Fehler: Das eingegebene Passwort stimmt nicht mit dem zur Überprüfung überein!",
        });
      }
      
    };
  
    

    function checkboxHandler() {
      setAgree(!agree);
    }
  
    function redirectToTerms() {
      navigate("/AGB");
    }
    let navigate = useNavigate();

    function goBack() {
        navigate(-1)
    }

    return (
        <div>
          <Container
      sx={{
        padding: "100px"
      }}
    >
            <IconButton id="userRegistrationPage-iconButton" onClick={() => navigate('/')}>
                <ArrowBackIosIcon/>
            </IconButton>
            <Container sx={{mt: 2}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="text">
                        Registrierung
                    </Typography>
                    <form noValidate>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller
                            name="userName"
                            control={control}
                            rules={{ required: true, minLength: 3 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Benutzername"
                                autoFocus
                                onChange={(e: any) => {
                                    setUserName(e.target.value);
                                    setValue("userName", e.target.value);
                                    return;
                                }}
                                value={userName}
                                InputLabelProps={{
                                  style: {
                                    color: "black"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                autoComplete="given-name"
                                required
                                fullWidth
                                label="Vorname"
                                autoFocus
                                onChange={(e: any) => {
                                    setFirstName(e.target.value);
                                    setValue("firstName", e.target.value);
                                    return;
                                }}
                                value={firstName}
                                InputLabelProps={{
                                  style: {
                                    color: "black"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Nachname"
                                autoComplete="family-name"
                                onChange={(e: any) => {
                                    setLastName(e.target.value);
                                    setValue("lastName", e.target.value);
                                    return;
                                }}
                                value={lastName}
                                InputLabelProps={{
                                  style: {
                                    color: "black"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 2,
                                // => RFC 2822 Email
                                pattern:
                                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i, // eslint-disable-line no-useless-escape
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="E-Mail-Adresse"
                                autoComplete="email"
                                onChange={(e: any) => {
                                    setEmail(e.target.value);
                                    setValue("email", e.target.value);
                                    return;
                                }}
                                value={email}
                                InputLabelProps={{
                                  style: {
                                    color: "black"
                                  }
                                }}
                                />
                            )}
                            />

                            
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Passwort"
                                type="password"
                                autoComplete="new-password"
                                onChange={(e: any) => {
                                    setPassword(e.target.value);
                                    setValue("password", e.target.value);
                                    return;
                                }}
                                value={password}
                                InputLabelProps={{
                                  style: {
                                    color: "black"
                                  }
                                }}
                                />
                            )}
                            />

                            
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 7,
                                maxLength: 32,
                                pattern:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{7,})?/i, //eslint-disable-line no-useless-escape
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Bestätige Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e: any) => {
                                    setConfirmPassword(e.target.value);
                                    setValue("confirmPassword", e.target.value);
                                    return;
                                }}
                                InputLabelProps={{
                                  style: {
                                    color: "black"
                                  }
                                }}
                                />
                            )}
                            />
                            {" "}
                            {error.isError && (
                            <small style={{ color: "red" }}>
                                Ein Fehler ist aufgetreten. Bitte überprüfen Sie ihre
                                Eingaben. {error.msg}
                            </small>
                            )}
                        </Grid>
                          

                        <Grid item xs={12}>
                            <input
                            type="checkbox"
                            value="allowExtraEmails"
                            color="primary"
                            />
                            <label style={{color: "#65615a"}}>
                            {" "}
                                 Ich möchte einen E-Mail Newsletter erhalten.
                            </label>
                        </Grid>

                        <Grid item xs={12}>
                            <input type="checkbox" id="agree" onChange={checkboxHandler} />
                            <label htmlFor="agree" style={{color: "#65615a"}}>  Ich stimme den Allgemeinen Geschäftsbedingungen (AGBs) zu. </label>
                        </Grid>
                        </Grid>
                        <Button
                        id="signUp-button"
                        disabled={!agree}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        onClick={handleSubmitClick}
                        color="inherit"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Registrieren
                        </Button>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                        <Link href="/signin" variant="body2" style={{color: "#65615a"}}>
                                {"Du hast bereits einen Acoount?"}
                                </Link>
                        </Grid>
                        </Grid>
                    </Box>
                    </form>
                </Box>
            </Container>
            </Container>
        </div>
    );
}

export default SignUp;