import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './Components/Nav.js';
import Main from './Components/Main.js';
import ScrollToTop from "./Components/ScrollToTop.js";
import {BrowserRouter as Router} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    animation: '$gradient 10s ease infinite',
    // background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    // background: 'linear-gradient(-45deg, #ee7752, #7b68ee, #23a6d5, #23d5ab)',
    background: 'linear-gradient(-45deg, rgba(169,115,255,1) 0%, rgba(109,87,255,1) 30%, rgba(24,144,179,1) 54%, rgba(4,164,184,1) 67%, rgba(0,255,171,1) 100%)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300% 300%',
    minHeight: '100vh',
  },
  '@keyframes gradient': {
    '0%': {backgroundPosition: '0% 50%'},
    '50%': {backgroundPosition: '100% 50%'},
    '100%': {backgroundPosition: '0% 50%'}
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <div className={classes.root}>
          <Nav />
          <Main />
        </div>
      </Router>
    </div>
  );
}

export default App;
