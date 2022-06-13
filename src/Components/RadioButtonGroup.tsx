import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Container } from '@mui/material';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sortieren</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Container>
          <FormControlLabel value="guitarS" control={<Radio />} label="Aufwärts" />
          <br/>
          <FormControlLabel value="guitarST" control={<Radio />} label="Abwärts" />
        </Container>
        
      </RadioGroup>
    </FormControl>
  );
}
