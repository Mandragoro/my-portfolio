import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

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
}));

export default function IconButtons() {

  const classes = useStyles();

  const Separator = () => (<div className={classes.separator}></div>);

  return (
    <Fade in={true} timeout={800}>
      <div className={classes.root}>

      <Typography component="p" variant="h2" className={classes.title} color="textSecondary" gutterBottom>
        H-board
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        H-board is a tool that helps children with cerebral palsy communicate with their parents. H-board consists of an Android application and custom hardware that uses kid's guttural sounds to select and activate pictograms that speak for them, making it a little bit easier to understand their basic needs.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        We won first place nationwide in the embedded electronics category with this project.
      </Typography>

      <Separator />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        Software
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        H-board was made with Java for Android, it consists of a grid of pictograms divided into categories and then actions. Each pictogram represents a need or an action, for example, there is one pictogram for “I’m hungry” and when selected the text to speech speaks that text.
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The app has a column with buttons and rows of pictograms the app is rotating the focus of each button (at a predefined speed), to select a row you wait until the focus is where you want, when selected, the automatic focus goes through every pictogram on the selected row, to exit the selected row at the end there is a button to return. The user selects the desired button using the custom hardware.
      </Typography>

      <Separator />

      <Typography component="p" variant="h3" className={classes.title2} color="textSecondary" gutterBottom>
        Hardware
      </Typography>
      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        Under development, the software was running on a Freescale i.MX53 microprocessor QSB running android, later the app was installed on an Android tablet. The controller was a custom-made low frequency vibration sensor to recognize guttural sounds in the throat. The system was for children with cerebral palsy that cannot speak but can make guttural sounds. This sensor transforms the guttural vibration into a enter key for the buttons in the app.
      </Typography>

      <Separator />

    </div>
    </Fade>
  );
}
