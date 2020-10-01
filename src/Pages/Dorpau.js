import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    <div className={classes.root}>

      <Typography component="p" variant="h2" className={classes.title} color="textSecondary" gutterBottom>
        Dorpau
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        (Under construction) SSR Website that filters potential real state customers according to their budget. It calculates rates for 1 person or a group of people, making it easier for groups of people to invest.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The client asked for a webpage to filter potential customers based on budget and location, I recommended a server side rendered page to maximize SEO, so React with NextJS was the choice for this project. With NextJS you can do “server side render” or “static serve”,  this project uses static serve to improve loading time without giving up SEO. 
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        
      </Typography>

      <div className={classes.buttonContainer}>
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

      <Separator />

    </div>
  );
}
