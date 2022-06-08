import { IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function InfoButton() {
    return (
        <IconButton color='primary' href={'http://localhost:3000/product-details'}>
            <InfoIcon />
        </IconButton>
    );
}