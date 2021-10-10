import * as React from 'react';
import { Container, Box } from '@mui/material/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import Home from 'home';
import ExFeature from 'exfeature';

const PAGES = {
  Home: '/',
  ExFeature: '/exfeature',
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTozrJtA52_LAxtdOU_jvDAvicG1B0j0A',
  authDomain: 'react-cra-shell.firebaseapp.com',
  projectId: 'react-cra-shell',
  storageBucket: 'react-cra-shell.appspot.com',
  messagingSenderId: '587613134512',
  appId: '1:587613134512:web:cdac8b7580fdb485e7a575',
  measurementId: 'G-0E2XJM1BJC',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
getAnalytics(firebase);

function App() {
  return (
    <Container maxWidth="sm">
      <Box py={4} height="100%" width="100%">
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
