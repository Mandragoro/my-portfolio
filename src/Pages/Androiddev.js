import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import kodamaVid from '../img/Kodamalwp-op.mp4';
import naviVid from '../img/navi-op2.mp4';
import psicronVid from '../img/Psicron-op2.mp4';
import hboardImg from '../img/hboard-op.jpg';
import { Link } from "react-router-dom";
import {useLazyLoadVideo, useLazyLoadImage} from '../Components/LazyLoad.js';

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
    minHeight: 244,
    maxHeight: 244,
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'unset',
      borderRadius: 4,
      boxShadow: theme.shadows[3],
      // objectFit: 'contain',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
  vidContainer: {
    padding: 5,
    overflow: 'hidden',
    width: 'auto',
    height: '100%',
    maxWidth: 450,
    margin: 'auto',
    minHeight: 244,
    maxHeight: 244,
    position: 'relative',
    '& video': {
      width: '100%',
      height: '100%',
      objectFit: 'unset',
      borderRadius: 4,
      boxShadow: theme.shadows[3],
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
    color: "rgb(255 255 255 / 80%)",
    marginTop: 8,
    marginBottom: 24,
  },
  button: {
    margin: "0px 12px 0 12px",
  },
}));

const LinkRouter = (props) => <Button color={"secondary"} variant={"outlined"} {...props} component={Link} />;

export default function Androiddev() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.gridContainer}>

          <Fade in={true} timeout={800}>
            <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>
              <Grid item xs={12} md={5} className={classes.gridItem}>
                <div className={classes.vidContainer}>
                  {useLazyLoadVideo(kodamaVid)}
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
                  <div className={classes.buttonContainer}>
                    <LinkRouter to={"/kodama"} className={classes.button}>
                      More Details
                    </LinkRouter>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Fade>

          <Fade in={true} timeout={1600}>
            <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>
              <Grid item xs={12} md={5} className={classes.gridItem}>
                <div className={classes.vidContainer}>
                {useLazyLoadVideo(naviVid)}
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
                  <div className={classes.buttonContainer}>
                    <LinkRouter to={"/navi"} className={classes.button}>
                      More Details
                    </LinkRouter>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Fade>
          
          <Fade in={true} timeout={2400}>
            <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>
              <Grid item xs={12} md={5} className={classes.gridItem}>
                <div className={classes.vidContainer}>
                  {useLazyLoadVideo(psicronVid)}
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
                  <div className={classes.buttonContainer}>
                    <LinkRouter to={"/psicron"} className={classes.button}>
                      More Details
                    </LinkRouter>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Fade>
          
          <Fade in={true} timeout={3200}>
            <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>
              <Grid item xs={12} md={5} className={classes.gridItem}>
                <div className={classes.imgContainer}>
                  {/* <img src={hboardImg} alt="Hboard app" /> */}
                  {useLazyLoadImage(hboardImg, {width:'100%'}, {backgroundSize: 'cover'})}
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
                  <div className={classes.buttonContainer}>
                    <LinkRouter to={"/hboard"} className={classes.button}>
                      More Details
                    </LinkRouter>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Fade>
          

        </div>

      </div>
      
    </div>
  );
}