import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: 'auto',
    marginTop: 150,
    padding: 50,
  },
  title: {
    color: 'rgb(255 255 255 / 0.6)',
    marginBottom: 48,
  },
  title2: {
    color: 'rgb(255 255 255 / 0.6)',
    textAlign: 'left',
    fontWeight: '200',
  },
  body1: {
    color: 'rgb(255 255 255 / 0.6)',
    textAlign: 'left',
  },
  separator: {
    display: 'block',
    width: '100%',
    height: 80,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  button: {
    color: '#ffffff',
    border: '1px solid rgb(255 255 255 / 50%)',
  },
}));

export default function IconButtons() {

  const classes = useStyles();

  const Separator = () => (<div className={classes.separator}></div>);

  return (
    <Fade in={true} timeout={800}>
      <div className={classes.root}>

      <Typography component="p" variant="h2" className={classes.title} color="textSecondary" gutterBottom>
        Navi LWP
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        (Retired from store) Live wallpaper for Android featuring Navi the fairy, she flies around following you and warns you when your battery is low. She also has the power to make you nostalgic about a certain game.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        This LWP for android was made using Java and LibGDX library, which is an open-source game development framework. The graphics are all homemade except for the backgrounds which are from different designers that gave their permission with attributions inside the app.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        This project has the challenge of supporting all screen resolutions given that all graphics used are only 1080p, so devices with higher resolutions may overflow the backgrounds. Zooming the backgrounds is an ugly and temporary solution, as the closer you get the camera to the background you start to see all pixels. Since I am not an artist who can draw everything I had to stick with this poor solution.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The app was on the Play Store for many years for one dollar, but as the Play Store grew, new policies came whit a lot of legal stuff from all around the world that I had no time to manage, so I retired the app.
      </Typography>

      {/* <div className={classes.buttonContainer}>
        <Button 
          target="_blank"
          rel="noopener" 
          color={"secondary"} 
          variant={"outlined"} 
          className={classes.button} 
          href={"#"} 
        >
          Live Demo
        </Button>
      </div> */}

      <Separator />

    </div>
    </Fade>
  );
}
