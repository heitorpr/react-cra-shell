import * as React from 'react';
import { Box, Typography, Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import { PAGES } from 'app';

function ExFeature() {
  return (
    <>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          ExFeature
        </Typography>

        <Button
          size="large"
          variant="outlined"
          component={Link}
          to={PAGES.Home}
        >
          Voltar
        </Button>
      </Box>
    </>
  );
}

export default ExFeature;
