import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: 'auto',
    marginTop: 150,
  },
  title: {
    color: 'rgb(255 255 255 / 0.6)',
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
}));

export default function IconButtons() {

  const classes = useStyles();

  const Separator = () => (<div className={classes.separator}></div>);

  return (
    <div className={classes.root}>

      <Typography component="p" variant="h2" className={classes.title} color="textSecondary" gutterBottom>
        La Cabaña
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        "La cabaña" is a mini market & restaurant delivery PWA, the customer can browse and purcahse all items available in the physical store, when the order is ready, it is delivered to the customer's address.
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The complete system has different parts, the client, CMS, database and server. Everything resides inside some docker containers hosted on a VPS running linux. The server uses Nginx to serve static conntent and as a reverse proxy to manage incomming connections, all incoming/outgoing connections are encrypted with ssl and has location based bans for countries that are not in the list.
      </Typography>

      <Separator />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        Client
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The client app is built with React.js and GraphQl and has a service worker to make it a PWA so customers can install it on their devices. The app calls the database using GraphQl queries which are cached for faster response time. This app also has Push Notifications which are essential for recieving order updates and promotrions.
      </Typography>

      <Separator />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        CMS
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The CMS is built aslo with React.js and GraphQl and has PWA capabilities but is mainly purposed to use it with biger devices. The app calls the database using GraphQl queries and mutations. It has everything one needs to CRUD data for this system so the client can display all managed data.
      </Typography>

      <Separator />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        Database
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The database is built using Postgresql, and is managed with a Node.js server with GraphQL schemas that deal with connections and data.
      </Typography>

      <Separator />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        Server
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        There are 2 servers in the system, Nginx for static files, connection management and reverse proxy and Node.js that deals with the database stuff and some tooling for image processing. 
      </Typography>

      <Separator />

    </div>
  );
}
