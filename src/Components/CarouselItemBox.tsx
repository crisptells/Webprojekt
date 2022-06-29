import { Card } from "@mui/material";


function CarouselItemBox(props: any) {

    const {
        image
    } = props;

    return(
        <Card>
            <img src={image}></img>
        </Card> 
    )
}

export default CarouselItemBox