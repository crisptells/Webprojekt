import { Button, Card, CardMedia, Container, Grid } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Instrument(props: any) {

    const {
        image,
        name
    } = props;

    return(
     <Container>

        <Card
            sx={{
                bgcolor: "black"
            }}
        >
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <CardMedia 
                    component="img"
                    sx={{
                        width: "100%",
                        alignSelf: "flex-start"
                    }}
                    image={image}
                    />
                    </Grid>
            </Grid>


        </Card>

     </Container>
    )
}

export default Instrument