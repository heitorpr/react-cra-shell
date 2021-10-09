import * as React from 'react';
import { Container, Box } from '@mui/material/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'home';
import ExFeature from 'exfeature';

const PAGES = {
  Home: '/',
  ExFeature: '/exfeature',
};

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Router>
          <Switch>
            <Route exact path={PAGES.Home}>
              <Home />
            </Route>
            <Route path={PAGES.ExFeature}>
              <ExFeature />
            </Route>
          </Switch>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
export { PAGES };
