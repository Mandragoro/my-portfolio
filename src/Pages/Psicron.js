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

export default function Psicron() {

  const classes = useStyles();

  const Separator = () => (<div className={classes.separator}></div>);

  return (
    <Fade in={true} timeout={800}>
      <div className={classes.root}>

      <Typography component="p" variant="h2" className={classes.title} color="textSecondary" gutterBottom>
        Psicron
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        Psicron is a platform game/exam for children, designed to test emotional wellness in children with cancer. It has 64 levels with one question at the end of each level, when the kid finishes the game, a table with all the results is calculated showing you the score accodring to some specific values made by a Psicologyst.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The client for this project was a Psychologist working with children with cancer, she wanted to test how well or bad the children were with their emotions, so she designed a written exam with 64 questions with 4 optional answers on each. In total there were 16 categories describing mental and emotional health.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The Psychologist wanted an app to make the exam easier to answer, so we came with the idea of a mobile game to gain the children attention and maximize answer accuracy. The project was a success, the children and the doctors liked the game and the Psychologist had the children’s exam result.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        This game was made with Unity engine and was intended for Android tables only. At the end of the 64 levels of the game, the app calculates all 16 categories values giving the Psychologist the result according to the kid’s health status.
      </Typography>

      <Separator />

    </div>
    </Fade>
  );
}
