import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

const navigate = useNavigate();

  const {data: instrumentsData}:any = useQuery("instruments", () => 
  fetch('http://localhost:8080/instruments').then((res)=>res.json())
  
);

var pushData = {instrumentsData};

<Link
  to={{
    pathname: "/shopping-cart",
    
  }}
></Link>