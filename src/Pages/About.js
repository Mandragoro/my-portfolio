import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import profileImg from '../img/profile-op.jpg';
import {useLazyLoadImage} from '../Components/LazyLoad.js'

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
    color: 'rgb(255 255 255 / 80%)',
  },
  title2: {
    color: 'rgb(255 255 255 / 80%)',
    textAlign: 'left',
    fontWeight: '200',
  },
  imgContainer: {
    padding: 5,
    overflow: 'hidden',
    width: 'auto',
    height: '100%',
    maxWidth: 450,
    margin: 'auto',
    // minHeight: 244,
    // maxHeight: 244,
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      position: 'absolute',
      top: 0,
      left: 0,
    }
  },
  imgContainer2: {
    // backgroundImage: `url('./profile-op.jpg')`,
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
    '@media (max-width: 580px)': {
      marginTop: 80,
    },
    '@media (min-width: 600px) and (max-width: 700px)': {
      marginTop: 50,
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
        <Fade in={true} timeout={800}>
          <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
            <Grid item xs={9} sm={6} md={6}>
              {/* <div className={classes.imgContainer2} /> */}
              <div className={classes.imgContainer}>
                {useLazyLoadImage(profileImg,{},{width: '80%', margin: 'auto', backgroundSize: 'cover', borderRadius: 4,minHeight: 285})}
              </div>
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
        </Fade>
      </div>
    </div>
  );
}