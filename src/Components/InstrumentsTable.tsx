import { Card, Grid } from "@mui/material";
import { getCookie } from "../CookieHandler";
import ListItemComponent from "./ListItemComponent";

function InstumentsTable(props: any){
    const{instrumentsData, filter, isMobile} = props;

    return(

        <Card>

            <Grid container rowSpacing={5}  className="instruments">

                {instrumentsData?.map((entry : any) => (
             <Grid item key={entry.title} xs={12} sm={12} md={12} lg={12} className="instrument">
                <Card>
                 <ListItemComponent title={entry.name} description={entry.description} category={entry.category} price={entry.price} pictureLink={entry.pictureLink}
                                     userId={getCookie("userId")} instrumentId={entry.id}/>
                </Card>
            </Grid>
                ))}

            </Grid>

        </Card>

        
    
    )
}

export default InstumentsTable;