import { Button } from "@mui/material";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';



export default function DataButton(this: any) {

    const navigate = useNavigate();

    const {data: instrumentsData}:any = useQuery("instruments", () => 
    fetch('http://localhost:8080/instruments').then((res)=>res.json())
    );
  
    return (

    

    <>
    <Button variant="contained" color="success" size='large' onClick={() => navigate('/shopping-cart')} endIcon={<InfoIcon />}></Button>
    <Link to={`/shopping-cart/${instrumentsData.id}?category={$category}`}>test</Link> 
    
    </>

    /** <Link to={`/shopping-cart/${instrumentsData.id}?uniqueIdentifier={$uniqueValue}`}>test</Link> */
        
);
}