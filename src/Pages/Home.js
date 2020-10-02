import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    minHeight: 'calc(100vh)',
  },
  title: {
    fontWeight: 200,
  },
  subTitle: {
    fontWeight: 200,
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade in={true} timeout={800}>
      <header className={classes.header}>
        <Typography component="h2" variant="h2" className={classes.title}>
          Abraham Trujillo
        </Typography>
        <Typography component="h3" variant="h5" className={classes.subTitle}>
          Front-end developer
        </Typography>
      </header>
      </Fade>
    </div>
  );
}