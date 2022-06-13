import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Container, Grid } from '@mui/material';
import RadioButtonsGroup from './RadioButtonGroup';
import RatingComponent from './RatingComponent';
import LabelComponent from './LabelComponent';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Filter</DialogTitle>
      <Grid container xs={12}>
        <Grid item xs={12}>
            <LabelComponent></LabelComponent>
        </Grid>
        <br/>
        <Grid item xs={12}>
            <RatingComponent></RatingComponent>
        </Grid>
        <br/>
        <Grid item xs={12}>
          <Container>
            <br/>
            <Button variant='contained'>Filtern</Button>
          </Container>            
        </Grid>
        <Grid item xs={12}>
          <Container>
            <p></p>
          </Container>            
        </Grid>
      </Grid>
    </Dialog>
  );
}


export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        
      </Typography>
      
      <Button variant="contained" onClick={handleClickOpen} startIcon={<FilterAltIcon />}>
        Filtern
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
