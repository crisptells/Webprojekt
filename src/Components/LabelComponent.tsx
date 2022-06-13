import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container } from '@mui/material';

export default function CheckboxLabels() {
  return (
    <FormGroup>
        <Container>
            <FormControlLabel control={<Checkbox />} label="E-Gitarre" />
            <br/>
            <FormControlLabel control={<Checkbox />} label="Konzertgittare" />
        </Container>
      
    </FormGroup>
  );
}
