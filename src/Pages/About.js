import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'rgb(255 255 255 / 0.6)',
  },
  title2: {
    color: 'rgb(255 255 255 / 0.6)',
    textAlign: 'left',
    fontWeight: '200',
  },
  imgContainer: {
    '& img': {
      width: 200,
      borderRadius: '50%',
    },
  },
  imgContainer2: {
    backgroundImage: `url('./profile-op.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    width: '80%',
    height: '100%',
    minHeight: 285,
    borderRadius: '4px',
    margin: 'auto',
  },
  gridContainer: {
    padding: 56,
    '@media (max-width: 400px)': {
      marginTop: 80,
    },
    '@media (max-height: 840px)': {
      marginTop: 80,
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gridContainer}>
        <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
          <Grid item xs={9} sm={6} md={6}>
            <div className={classes.imgContainer2} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <div className={classes.textContainer}>
            <Typography component="p" variant="h4" className={classes.title2} color="textSecondary" gutterBottom>
              I'm Abraham and I have a Bachelor of Science in Electronics Engineering. I mainly focus on software because is what I like the most and I consider myself a fullstack developer but I really like UX/UI. 
            </Typography>
            <Typography component="p" variant="h4" className={classes.title2} color="textSecondary" gutterBottom>
              The current stack that I like is Postgresql, Express.js, React.js, Node.js.
            </Typography>
            <div className={classes.imgContainer}>
            </div>
          </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}