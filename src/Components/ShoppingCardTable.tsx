import { Card, Grid } from "@mui/material";
import ListItemComponent from "./ListItemComponent";
import ShoppingCardItem from "./ShoppingCardItem";

function ShoppingCardTable(props: any){
    const{instrumentsData} = props;

    return(

        <Card>

            <Grid container rowSpacing={5}  className="instruments">

                {instrumentsData?.map((entry : any) => (
             <Grid item key={entry.instrumentId.title} xs={12} sm={12} md={12} lg={12} className="instrument">
                <Card>
                 <ShoppingCardItem title={entry.instrumentId.name} description={entry.instrumentId.description} category={entry.instrumentId.category} price={entry.instrumentId.price} pictureLink={entry.instrumentId.pictureLink}/>
                </Card>
            </Grid>
                ))}
            </Grid>

        </Card>

        
    
    )
}

export default ShoppingCardTable;