import {useState} from "react";

import Grid from "@mui/material/Grid";
import {
    Avatar,
    Box,
    Container,
    IconButton,
    TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {getCookie, setCookie} from "../../CookieHandler";
import {useNavigate} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";
import "./SignIn.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function SignIn() {

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

    let navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    };

    const handleSubmitClick = async () => {
        let redirectHome: boolean = false;
        let passwordToSend: string;

        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userName: userName,
                password: userPassword,
            }),
        };
        const response = await fetch('http://localhost:8080/users/login', requestOptions);
        if (!response.ok) {
            setError({isError: true, msg: `Fehler: ${response.statusText}`});
        } else if (response.ok) {
            const data: any = await response.json();
            setError({isError: false, msg: "No error"});
            setCookie("userId", data.id, 7);
            console.log("Angemeldet UserID: "+ getCookie("userId"))
            redirectHome = true;
        }
        setIsLoading(false);
        if (redirectHome) {
            redirectToHome();
        }
    };

    if (isLoading)
        return (
            <p>Loading</p>
        );

    function goBack() {
        navigate(-1);
    }

    return (
        <div>
             <Container
      sx={{
        padding: "100px"
      }}
    >
            <IconButton id="signInPage-iconButton" onClick={() => navigate('/')}>
                <ArrowBackIosIcon/>
            </IconButton>
            <Container sx={{mt: 2}}
                id ="singInPage-container"
                component="main"
                maxWidth="xs"
                className="main"
            >
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
                        Einloggen
                    </Typography>
                    <form className="{classes.form}" noValidate>
                        <Controller
                            name="userName"
                            control={control}
                            rules={{required: true, minLength: 3 }}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    margin="normal"
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
                        <Controller
                            name="userPassword"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 7,
                                maxLength: 32,
                            }}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Passwort"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e: any) => {
                                        setUserPassword(e.target.value);
                                        setValue("userPassword", e.target.value);
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

                        <Grid item xs={12}>
                            <input
                            type="checkbox"
                            value="allowExtraEmails"
                            color="primary"
                            />
                            <label style={{color: "#65615a"}}>
                            {" "}
                                Angemeldet bleiben.
                            </label>
                        </Grid>
                        <br/>
                        {error.isError && (
                            <small style={{color: "red"}}>
                                Ein Fehler ist aufgetreten. Bitte ??berpr??fen Sie ihren
                                eingegebenen Benutzernamen und das Passwort.
                                
                            </small>
                        )}
                        <br/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="inherit"
                            sx={{
                                borderColor: "rgba(5,10,15,255)",
                                color: "white"
                            }}
                            className="{classes.submit}"
                            onClick={handleSubmit(handleSubmitClick)}
                        >
                            Anmelden
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/signup" variant="body2" style={{color: "#65615a"}}>
                                {"Neuer Benutzer?"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2" style={{color: "#65615a"}}>
                                    
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
            </Container>
        </div>
    );
}