import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import routes from '../routes.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  main: {
    flex: 1,
    minHeight: 'calc(100vh - 100px)',
    // backgroundColor: '#3f3c52',
  },
}));

export default function Main() {

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path !== "" ? route.path:`/:topicId`}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </div>
  );
}