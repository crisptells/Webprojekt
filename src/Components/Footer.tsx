import { Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <Grid>
        <Grid item xs={12} textAlign='center'>
            <p><Link href="http://localhost:3000/impressum">Impressum </Link> |
               <Link href="http://localhost:3000/kontakt"> Kontakt </Link> | 
               <Link href="http://localhost:3000/hilfe"> Hilfe</Link></p>
        </Grid>
    </Grid>
  );
}

