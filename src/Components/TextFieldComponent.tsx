import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon(props:any) {

    const { 
        textField
    } = props;

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        label={textField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
}
