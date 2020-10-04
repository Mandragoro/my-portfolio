import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import {useLazyLoadImage} from '../Components/LazyLoad.js';
import client from '../img/cabana-client-op.png'
import checkout from '../img/cabana-client-checkout-op.png'
import order from '../img/cabana-client-order-op.png'
import products from '../img/cabana-client-products-op.png'
import cmsAdd from '../img/cms-addproduct-op.png'
import cmsCatfrom from '../img/cms-categories-op.png'
import cmsDash from '../img/cms-dashboard-op.png'
import cmsOrders from '../img/cms-orders-op.png'
import cmsProducts from '../img/cms-products-op.png'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: 'auto',
    marginTop: 150,
    padding: '12px 50px 12px 50px',
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
  imagesContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > div': {
      width: 150,
      height: 300,
      marginBottom: 50,
      overflow: 'hidden',
      position: 'relative',
    },
  },
  cmsImagesContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& div': {
      width: 400,
      height: 260,
      overflow: 'hidden',
      position: 'relative',
      marginBottom: 50,
      '@media (max-width: 500px)': {
        height: 180,
        width: '100%',
      },
    },
  },
}));

export default function IconButtons() {

  const openLink = () => {
    window.open("https://mandragoro.xyz", 'La Cabaña', 'left=20,top=20,width=412,height=800,toolbar=0,resizable=1,rel="noopener"'); 
    return false;
  }

  const classes = useStyles();

  const Separator = () => (<div className={classes.separator}></div>);

  return (
    <Fade in={true} timeout={800}>
      <div className={classes.root}>

      <Typography component="p" variant="h2" className={classes.title} color="textSecondary" gutterBottom>
        La Cabaña
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        "La cabaña" is a mini market & restaurant delivery PWA, the customer can browse and purcahse all items available in the physical store, when the order is ready, it is delivered to the customer's address.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The complete system has different parts, the client, CMS, database and server. Everything resides inside some docker containers hosted on a VPS running linux. The server uses Nginx to serve static conntent and as a reverse proxy to manage incomming connections, all incoming/outgoing connections are encrypted with ssl and has location based bans for countries that are not in the list.
      </Typography>

      <br />

      <div className={classes.buttonContainer}>
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

      <Separator />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        Client
      </Typography>
      
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The client app is built with React.js and GraphQl and has a service worker to make it a PWA so customers can install it on their devices. The app calls the database using GraphQl queries which are cached for faster response time. This app also has Push Notifications which are essential for recieving order updates and promotrions.
      </Typography>

      <br />

      <div className={classes.imagesContainer}>
        <div>
          {useLazyLoadImage(client)}
        </div>
        <div>
          {useLazyLoadImage(products)}
        </div>
        <div>
          {useLazyLoadImage(checkout)}
        </div>
        <div>
          {useLazyLoadImage(order)}
        </div>
      </div>

      <br />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        CMS
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The CMS is built aslo with React.js and GraphQl and has PWA capabilities but is mainly purposed to use it with biger devices. The app calls the database using GraphQl queries and mutations. It has everything one needs to CRUD data for this system so the client can display all managed data.
      </Typography>

      <br />

      <div className={classes.cmsImagesContainer}>
        <div>
          {useLazyLoadImage(cmsAdd)}
        </div>
        <div>
          {useLazyLoadImage(cmsCatfrom)}
        </div>
        <div>
          {useLazyLoadImage(cmsDash)}
        </div>
        <div>
          {useLazyLoadImage(cmsOrders)}
        </div>
        <div>
          {useLazyLoadImage(cmsProducts)}
        </div>
      </div>

      <br />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        Database
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The database is built using Postgresql, and is managed with a Node.js server with GraphQL schemas that deal with connections and data.
      </Typography>

      <br />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        Server
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        There are 2 servers in the system, Nginx for static files, connection management and reverse proxy and Node.js that deals with the database stuff and some tooling for image processing. 
      </Typography>

      <Separator />

    </div>
    </Fade>
  );
}
