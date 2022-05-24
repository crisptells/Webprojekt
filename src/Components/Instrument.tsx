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
                bgcolor: "orange"
            }}
        >
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <CardMedia 
                    component="img"
                    sx={{
                        width: "100%",
                        alignSelf: "flex-start"
                    }}
                    image={image}
                    />
                    </Grid>

                <Grid item xs={6}>
                    <p>{name}</p>
                    <Button>
                        <p>Yay!</p>
                        <ThumbUpIcon />
                    </Button>
                    <Button>
                        <p>Nay</p>
                        <ThumbDownIcon />
                    </Button>
                </Grid>
            </Grid>


        </Card>

     </Container>
    )
}

export default Instrument