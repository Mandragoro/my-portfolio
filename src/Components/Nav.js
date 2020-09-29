import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import routes from '../routes.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  linksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    margin: '0px 4px 0px 4px',
  },
}));

const LinkRouter = (props) => <Button variant={"text"} size={"large"} style={{color:'#fff', fontWeight: '200'}} {...props} component={Link} />;

export default function Nav() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.linksContainer}>
        {routes.map((route, index)=> {
          if (route.path === '' || index >= 4) return null;
          return (
            <span className={classes.links} key={index}>
              <LinkRouter to={route.path}>
                {route.name}
              </LinkRouter>
            </span>
          );
        })}
      </div>
    </div>
  );
}