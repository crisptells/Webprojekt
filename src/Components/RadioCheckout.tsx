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
      <Container>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
          <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
          <FormControlLabel value="Kreditkarte" control={<Radio />} label="Kreditkarte" />
          <FormControlLabel value="SEPA Lastschrift" control={<Radio />} label="SEPA Lastschrift" />
      </RadioGroup>
      </Container>
    </FormControl>
  );
}
