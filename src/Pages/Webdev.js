import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import img from '../img/cabana-both-op2.png';
import img2 from '../img/rando-both-op.png';
import img3 from '../img/dorpau-both-op2.png';
import img4 from '../img/materialator-op.png';

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

const LinkRouter = (props) => <Button color={"secondary"} variant={"outlined"} {...props} component={Link} />;

export default function Webdev() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.gridContainer}>

          <Grid container spacing={0} direction="row" justify="center" alignItems="stretch" className={classes.grid}>

            <Grid item xs={12} md={5} className={classes.gridItem}>
              <div className={classes.imgContainer}>
                <img src={img} alt="supermarket app" />
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
                <LinkRouter to={"/cabana"}>
                  More Details
                </LinkRouter>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItem}>
              <div className={classes.imgContainer}>
                <img src={img2} alt="Random Classmate app" />
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
                <LinkRouter to={"/random-classmate"}>
                  More Details
                </LinkRouter>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItem}>
              <div className={classes.imgContainer}>
                <img src={img3} alt="Dorpau website" />
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
                <LinkRouter to={"/dorpau"}>
                  More Details
                </LinkRouter>
              </div>
            </Grid>

            <Grid item xs={12} md={5} className={classes.gridItem}>
              <div className={classes.imgContainer}>
                <img src={img4} alt="Materialator app" />
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

        </div>

      </div>
      
    </div>
  );
}