import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import vid from '../img/Kodamalwp-op.mp4';
import vid2 from '../img/Navi-op.mp4';
import vid3 from '../img/Psicron-op2.mp4';
import img from '../img/hboard-op.jpg';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  title: {
    color: 'rgb(255 255 255 / 0.6)',
  },
  content: {
    marginTop: 150,
  },
  gridContainer: {
    padding: 12,
  },
  grid: {
    padding: '0px 24px',
    maxWidth: 1600,
    margin: 'auto',
  },
  gridItem: {
    marginBottom: 100,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  gridItemText: {
    marginBottom: 100,
    marginLeft: 50,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 40,
      marginLeft: 0,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 0,
    },
  },
  imgContainer: {
    padding: 5,
    overflow: 'hidden',
    width: 'auto',
    height: '100%',
    maxWidth: 450,
    margin: 'auto',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  vidContainer: {
    padding: 5,
    overflow: 'hidden',
    width: 'auto',
    height: '100%',
    maxWidth: 450,
    margin: 'auto',
    '& video': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }
  },
  descContainer: {
    padding: 5,
    width: 'auto',
    maxWidth: 450,
    height: '100%',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  desc: {
    color: "#fff",
    marginTop: 8,
    marginBottom: 24,
  },
  seeMoreButton: {

  },
}));

export default function Androiddev() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.gridContainer}>

          <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>

            <Grid item xs={12} md={5} className={classes.gridItem}>
              <div className={classes.vidContainer}>
                <video controls={false} autoPlay loop>
                  <source src={vid} type="video/mp4" />
                </video>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItemText}>
              <div className={classes.descContainer}>
                <Typography component="p" variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                  Kodama LWP
                </Typography>
                <Typography component="p" variant="body1" className={classes.desc} gutterBottom>
                  (Under development) Kodama LWP is a live wallpaper for Android. It features little forest spirits that apear and desapear as you try to interact with them. Those spirits can make you nostalgic about certaint movie.
                </Typography>
                <Button variant="outlined" color="secondary" className={classes.seeMoreButton}>
                  More Details
                </Button>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItem}>
              <div className={classes.vidContainer} style={{maxWidth: '45%'}}>
                <video controls={false} autoPlay loop>
                  <source src={vid2} type="video/mp4" />
                </video>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItemText}>
              <div className={classes.descContainer}>
                <Typography component="p" variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                  Navi LWP
                </Typography>
                <Typography component="p" variant="body1" className={classes.desc}>
                  (Retired from store) Live wallpaper for Android featuring Navi the fairy, she flies around following you and warns you when your battery is low. She also has the power to make you nostalgic about a certain game.
                </Typography>
                <Button variant="outlined" color="secondary" className={classes.seeMoreButton}>
                  More Details
                </Button>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItem}>
              <div className={classes.vidContainer}>
                <video controls={false} autoPlay loop>
                  <source src={vid3} type="video/mp4" />
                </video>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItemText}>
              <div className={classes.descContainer}>
                <Typography component="p" variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                  Psicron
                </Typography>
                <Typography component="p" variant="body1" className={classes.desc}>
                  Psicron is a platform game/exam for children, designed to test emotional wellness in children with cancer. It has 64 levels with one question at the end of each level, when the kid finishes the game, a table with all the results is calculated showing you the score accodring to some specific values made by a Psicologyst.
                </Typography>
                <Button variant="outlined" color="secondary" className={classes.seeMoreButton}>
                  More Details
                </Button>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItem}>
              <div className={classes.imgContainer}>
                <img src={img} alt="Hboard app" />
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItemText}>
              <div className={classes.descContainer}>
                <Typography component="p" variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                  H-board
                </Typography>
                <Typography component="p" variant="body1" className={classes.desc}>
                  H-board is a tool that helps children with cerebral palsy communicate with their parents. H-board consists of an Android application and custom hardware that uses kid's guttural sounds to select and activate pictograms that speak for them, making it a little bit easier to understand their basic needs.
                </Typography>
                <Button variant="outlined" color="secondary" className={classes.seeMoreButton}>
                  More Details
                </Button>
              </div>
            </Grid>

          </Grid>

        </div>

      </div>
      
    </div>
  );
}