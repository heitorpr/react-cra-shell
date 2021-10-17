import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import { PAGES } from 'app';
import getAwesomeMessage from './services/get-awesome-message.js';

function Home() {
  const [apiResponse, setApiResponse] = useState('loading...');

  useEffect(() => {
    getAwesomeMessage()
      .notFound((error) => setApiResponse(error))
      .unauthorized((error) => setApiResponse(error))
      .fetchError(() => {
        setApiResponse('Falha de rede');
      })
      .text((response) => setApiResponse(response))
      .catch((error) => setApiResponse(error));
  }, []);

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

        <Typography>{apiResponse}</Typography>
      </Box>
    </>
  );
}

export default Home;
