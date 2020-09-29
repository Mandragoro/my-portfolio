import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import img from '../img/profile-op.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: 'auto',
    // marginTop: 150,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  title: {
    color: 'rgb(255 255 255 / 0.6)',
  },
  title2: {
    color: 'rgb(255 255 255 / 0.6)',
    textAlign: 'left',
    fontWeight: '200',
  },
  imgContainer: {
    // overflow: 'hidden',
    // width: '300px',
    // height: '300px',
    // margin: 'auto',
    '& img': {
      width: 200,
      borderRadius: '50%',
    },
  },
  imgContainer2: {
    backgroundImage: `url('./profile-op.jpg')`,
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    width: '80%',
    height: 285,
    borderRadius: '4px',
    marginRight: 40,
  },
  textContainer: {

  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.imgContainer2} />
        <div className={classes.textContainer}>
          <Typography component="p" variant="h4" className={classes.title2} color="textSecondary" gutterBottom>
            I'm Abraham and I have a Bachelor of Science in Electronics Engineering. I mainly focus on software because is what I like the most and I consider myself a fullstack developer but I really like UX/UI. 
          </Typography>
          <Typography component="p" variant="h4" className={classes.title2} color="textSecondary" gutterBottom>
            The current stack that I like is Postgresql, Express.js, React.js, Node.js.
          </Typography>
          <div className={classes.imgContainer}>
            {/* <img src={img} alt="profile" /> */}
          </div>
        </div>
        {/* <div className={classes.imgContainer2} /> */}
      </header>
    </div>
  );
}