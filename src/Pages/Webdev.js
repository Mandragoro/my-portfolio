import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import cabana from '../img/cabana-both-op3.png';
import randomClassmate from '../img/rando-both-op2.png';
import dorpau from '../img/dorpau-both-op3.png';
import materialator from '../img/materialator-op2.png';
import {useLazyLoadImage} from '../Components/LazyLoad.js';

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
      objectFit: 'contain',
      position: 'absolute',
      top: 0,
      left: 0,
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

const openLink = () => {
  window.open("https://mandragoro.xyz", 'La Cabaña', 'left=20,top=20,width=412,height=800,toolbar=0,resizable=1,rel="noopener"'); 
  return false;
}

export default function Webdev() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.gridContainer}>

          <Fade in={true} timeout={800}>
            <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>
              <Grid item xs={12} md={5} className={classes.gridItem}>
                <div className={classes.imgContainer}>
                  {useLazyLoadImage(cabana)}
                </div>
              </Grid>

              <Grid item xs={12} md={5} className={classes.gridItemText}>
                <div className={classes.descContainer}>
                  <Typography component="p" variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                    La Cabaña
                  </Typography>
                  <Typography component="p" variant="body1" className={classes.desc} gutterBottom>
                    (Beta) "La cabaña" is a mini market & restaurant delivery PWA, the customer can browse and purcahse all items available in the physical store, when the order is ready, it is delivered to the customer's address.
                  </Typography>
                  <div className={classes.buttonContainer}>
                    <LinkRouter to={"/cabana"} className={classes.button}>
                      More Details
                    </LinkRouter>
                    <Button 
                      rel="noopener" 
                      color={"secondary"} 
                      variant={"outlined"} 
                      className={classes.button} 
                      onClick={openLink} 
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Fade>

          <Fade in={true} timeout={{enter:1600}}>
            <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>
              <Grid item xs={12} md={5} className={classes.gridItem}>
                <div className={classes.imgContainer}>
                  {useLazyLoadImage(randomClassmate)}
                </div>
              </Grid>

              <Grid item xs={12} md={5} className={classes.gridItemText}>
                <div className={classes.descContainer}>
                  <Typography component="p" variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                    Random Classmate
                  </Typography>
                  <Typography component="p" variant="body1" className={classes.desc}>
                    Random Classmate is a basic and simple PWA. It's only purpose is to randomize classmate names of a group, useful when teaching kids online.
                  </Typography>
                  <div className={classes.buttonContainer}>
                    <LinkRouter to={"/random-classmate"} className={classes.button}>
                      More Details
                    </LinkRouter>
                    <Button 
                      target="_blank"
                      rel="noopener" 
                      color={"secondary"} 
                      variant={"outlined"} 
                      className={classes.button} 
                      href={"https://dreamy-saha-9a821c.netlify.app/"} 
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Fade>

          <Fade in={true} timeout={{enter:2400}}>
            <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>
              <Grid item xs={12} md={5} className={classes.gridItem}>
                <div className={classes.imgContainer}>
                  {useLazyLoadImage(dorpau)}
                </div>
              </Grid>

              <Grid item xs={12} md={5} className={classes.gridItemText}>
                <div className={classes.descContainer}>
                  <Typography component="p" variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                    Dorpau
                  </Typography>
                  <Typography component="p" variant="body1" className={classes.desc}>
                    (Under construction) SSR Website that filters potential real state customers according to their budget. It calculates rates for 1 person or a group of people, making it easier for groups of people to invest.
                  </Typography>
                  <div className={classes.buttonContainer}>
                    <LinkRouter to={"/dorpau"} className={classes.button}>
                      More Details
                    </LinkRouter>
                    <Button 
                      target="_blank"
                      rel="noopener" 
                      color={"secondary"} 
                      variant={"outlined"} 
                      className={classes.button} 
                      href={"https://jovial-cori-a87263.netlify.app/"} 
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Fade>

          <Fade in={true} timeout={{enter:3200}}>
            <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>
              <Grid item xs={12} md={5} className={classes.gridItem}>
                <div className={classes.imgContainer}>
                  {useLazyLoadImage(materialator)}
                </div>
              </Grid>

              <Grid item xs={12} md={5} className={classes.gridItemText}>
                <div className={classes.descContainer}>
                  <Typography component="p" variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                    Materialator
                  </Typography>
                  <Typography component="p" variant="body1" className={classes.desc}>
                    (Only for localhost) This web app helps teachers create batch flashcards, print and cut them for later use with kids as a learning material. It's possible to create and save templates for later use.
                  </Typography>
                  <LinkRouter to={"/materialator"}>
                    More Details
                  </LinkRouter>
                </div>
              </Grid>
            </Grid>
          </Fade>

        </div>

      </div>
      
    </div>
  );
}