import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import logo from '../logo.svg';
// import RouterBreadcrumbs from '../Components/RouterBreadcrumbs.js';

const useStyles = makeStyles((theme) => ({
  root: {
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    // backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minHeight: 'calc(100vh)',
  },
  title: {
    fontWeight: 200,
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <RouterBreadcrumbs /> */}
      <header className={classes.header}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Typography component="h2" variant="h2" className={classes.title}>
          Abraham Trujillo
        </Typography>
        <Typography component="h3" variant="h5">
          Front-end developer
        </Typography>
      </header>
    </div>
  );
}