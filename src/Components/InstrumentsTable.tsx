import { Grid } from "@mui/material";
import ListItemComponent from "./ListItemComponent";

function InstumentsTable(props: any){
    const{instrumentsData, filter, isMobile} = props;

    return(

        

        <Grid container rowSpacing={5}  className='ausleiheGrid'>

            {instrumentsData?.map((entry : any) => entry.category.toLowerCase().includes(filter.toLowerCase()) && (
                <Grid item key={entry.title} xs={12} sm={12} md={12} lg={12}>
                    <ListItemComponent title={entry.title} subtitle={entry.category} link={entry.id} picture={entry.mainPicture}/>
                    
                </Grid>
            ))}

        </Grid>
    
    )
}

export default InstumentsTable;