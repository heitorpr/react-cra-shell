import * as React from 'react';
import { Box, Typography, Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import { PAGES } from 'app';

function Home() {
  return (
    <>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          React CRA Shell by Heitor
        </Typography>

        <Button
          size="large"
          variant="outlined"
          component={Link}
          to={PAGES.ExFeature}
        >
          Abrir a EXFeature
        </Button>
      </Box>
    </>
  );
}

export default Home;
