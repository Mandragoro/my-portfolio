import React from "react";
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Webdev from './Pages/Webdev.js';
import Androiddev from './Pages/Androiddev.js';
import Cabana from './Pages/Cabana.js';
import RandomClassMate from './Pages/RandomClassMate.js';
import Dorpau from './Pages/Dorpau.js';
import Materialator from './Pages/Materialator.js';
import NotFound from './Pages/NotFound.js';

const routes = [
  {
    path: "/",
    exact: true,
    name: 'Home',
    sidebar: () => <div>Home!</div>,
    main: () => <Home />
  },
  {
    path: "/webdev",
    name: 'Web dev',
    sidebar: () => <div>webdev!</div>,
    main: () => <Webdev />
  },
  {
    path: "/androiddev",
    name: 'Android dev',
    sidebar: () => <div>androiddev!</div>,
    main: () => <Androiddev />
  },
  {
    path: "/about",
    name: 'About',
    sidebar: () => <div>about!</div>,
    main: () => <About />
  },
  {
    path: "/cabana",
    name: 'Cabana',
    sidebar: () => <div>Cabana!</div>,
    main: () => <Cabana />
  },
  {
    path: "/random-classmate",
    name: 'Random Classmate',
    sidebar: () => <div>Random Classmate!</div>,
    main: () => <RandomClassMate />
  },
  {
    path: "/dorpau",
    name: 'Dorpau',
    sidebar: () => <div>Dorpau!</div>,
    main: () => <Dorpau />
  },
  {
    path: "/materialator",
    name: 'Materialator',
    sidebar: () => <div>Materialator!</div>,
    main: () => <Materialator />
  },
  {
    path: "",
    name: 'NotFound',
    sidebar: () => <div>details!</div>,
    main: () => <NotFound />
  },
];

export default routes;