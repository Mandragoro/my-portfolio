import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 150,
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="p" variant="h1" className={classes.title} color="textSecondary" gutterBottom>
        404
      </Typography>
    </div>
  );
}
