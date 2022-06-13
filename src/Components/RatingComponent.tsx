import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export default function RatingSIze() {
  return (
    <Container>
      <Stack spacing={1}>
      <Rating name="size-large" defaultValue={2} size="large" />
      </Stack>
    </Container>
    
  );
}
