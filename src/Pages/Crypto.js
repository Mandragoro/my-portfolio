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

  const classes = useStyles();

  const Separator = () => (<div className={classes.separator}></div>);

  return (
    <Fade in={true} timeout={800}>
      <div className={classes.root}>

      <Typography component="p" variant="h2" className={classes.title} color="textSecondary" gutterBottom>
        Bybit trading fees calculator
      </Typography>

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        This tool calculates fees when making a trade in Bybit, you enter the enter price, exit price, contracts quantity, enter/exit type and the tool calculates the fees to pay or the fees they will pay you.
      </Typography>

      <br />

      <Typography component="p" variant="body1" className={classes.body1} color="textSecondary" gutterBottom>
        The tool was made using React.js, Material-ui for styling and netlify for hosting. All fees percentages are specific to Bybit exchange.
      </Typography>

      <br />

      <div className={classes.buttonContainer}>
        <Button 
          rel="noopener" 
          color={"secondary"} 
          variant={"outlined"} 
          className={classes.button} 
          href={"https://crypto-fee-calculator.netlify.app/"} 
        >
          Live Demo
        </Button>
      </div>

      <Separator />

      </div>
    </Fade>
  );
}
