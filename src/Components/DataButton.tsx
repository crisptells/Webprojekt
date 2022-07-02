import { Button } from "@mui/material";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import { render } from "react-dom";



export default function DataButton(props : any) {

    const navigate = useNavigate();

    const {data: instrumentsData}:any = useQuery("instruments", () => 
    fetch('http://localhost:8080/instruments').then((res)=>res.json())
    );

      
    const {

        instrument
  
    } = props;
    
    
    return (
        
        <Link to="/shopping-cart" state={instrument}></Link>

    );
}