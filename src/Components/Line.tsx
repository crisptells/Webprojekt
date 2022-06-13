import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Line(props: any) {

    const {
        line
    } = props;
    console.log(line)
    return(
        <Container>
            <Typography component={'span'} variant={'body2'}>
            {{line} ? "lineTrue" : "LineFalse"}
            </Typography>
            </Container>
    )
}