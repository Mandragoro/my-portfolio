import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  lazyMedia:{
    width: '100%', 
    height:'100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  skeleton: {
    width: '80%', 
    height:'100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    margin: 'auto',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.11)',
  },
  skeletonVideo: {
    width: '100%', 
    height:'100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    margin: 'auto',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.11)',
  },
}));

export const useLazyLoadImage = (src, skeletonStyle, imgDiv) => {
  const [sourceLoaded, setSourceLoaded] = React.useState(null);
  const classes = useStyles();

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded ? (
    <Fade in={true} timeout={800}>
      <div className={classes.lazyMedia} style={{...imgDiv, backgroundImage: `url(${sourceLoaded})` }} />
    </Fade>
  ) : (
    <Skeleton animation="wave" variant="rect" className={classes.skeleton} style={{...skeletonStyle}} />
  );
};

export const useLazyLoadVideo = (src) => {
  const [sourceLoaded, setSourceLoaded] = React.useState(null);
  const classes = useStyles();
  
  React.useEffect(() => {
    // const vid = new Image();
    const vid = document.createElement("VIDEO");
    vid.src = src;
    vid.oncanplay = () => {
      return setSourceLoaded(src);
    };
  }, [src]);

  return sourceLoaded ? (
    <Fade in={true} timeout={800}>
      <video controls={false} autoPlay loop>
        <source src={src} type="video/mp4" />
      </video>
    </Fade>
  ) : (
    <Skeleton animation="wave" variant="rect" className={classes.skeletonVideo} />
  );
};
