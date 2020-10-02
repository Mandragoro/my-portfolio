import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        Random Classmate
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        Random Classmate is a basic and simple PWA. It's only purpose is to randomize classmate names of a group, useful when teaching kids online.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The app was made using React and IndexedDB to save locally all user data. The user can create multiple groups with multiple children names on each, then the user can start randomizing names. All the names appear as swipeable flashcards as the app is intended for tablets.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The client asked for a simple to use app only to randomize students names and to be able to open the app fast from the iPad, and that’s why PWA was the choice.
      </Typography>

      <div className={classes.buttonContainer}>
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

      <Separator />

    </div>
    </Fade>
  );
}
