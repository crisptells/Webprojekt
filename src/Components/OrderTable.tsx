import { Card, Grid } from "@mui/material";
import ListItemComponent from "./ListItemComponent";
import ShoppingCardItem from "./ShoppingCardItem";
import OrderItem from "./OrderItem"

function OrderTable(props: any){
    const{instrumentsData, filter, isMobile} = props;

    return(

        <Card>

            <Grid container rowSpacing={5}  className="instruments">

                {instrumentsData?.map((entry : any) => (
             <Grid item key={entry.title} xs={12} sm={12} md={12} lg={12} className="instrument">
                <Card>
                 <OrderItem title={entry.name} description={entry.description} category={entry.category} price={entry.price} pictureLink={entry.pictureLink}/>
                </Card>
            </Grid>
                ))}

            </Grid>

        </Card>

        
    
    )
}

export default OrderTable;