import * as React from 'react';
import { Container, Box, Typography } from '@mui/material/';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-beta example
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
