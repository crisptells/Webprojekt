import { Container, Grid } from "@mui/material";


function Tiles(props : any){

const {
    image
} = props;

    return(
        
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={image}/>
                </Grid>
            </Grid>
        
    )

}

export default Tiles