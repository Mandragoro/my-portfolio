import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
// import RouterBreadcrumbs from '../Components/RouterBreadcrumbs.js';

const useStyles = makeStyles((theme) => ({
  root: {
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
  },
  header: {
    // backgroundColor: '#282c34',
    // minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <RouterBreadcrumbs /> */}
      <header className={classes.header}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}