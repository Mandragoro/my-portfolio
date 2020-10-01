import React from "react";
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Webdev from './Pages/Webdev.js';
import Androiddev from './Pages/Androiddev.js';
import NotFound from './Pages/NotFound.js';
import Cabana from './Pages/Cabana.js';
import RandomClassMate from './Pages/RandomClassMate.js';
import Dorpau from './Pages/Dorpau.js';
import Materialator from './Pages/Materialator.js';
import Kodama from './Pages/Kodama.js';
import Navi from './Pages/Navi.js';
import Psicron from './Pages/Psicron.js';
import Hboard from './Pages/Hboard.js';

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
    path: "/kodama",
    name: 'Kodama',
    sidebar: () => <div>Kodama!</div>,
    main: () => <Kodama />
  },
  {
    path: "/navi",
    name: 'Navi',
    sidebar: () => <div>Navi!</div>,
    main: () => <Navi />
  },
  {
    path: "/psicron",
    name: 'Psicron',
    sidebar: () => <div>Psicron!</div>,
    main: () => <Psicron />
  },
  {
    path: "/hboard",
    name: 'Hboard',
    sidebar: () => <div>Hboard!</div>,
    main: () => <Hboard />
  },
  {
    path: "",
    name: 'NotFound',
    sidebar: () => <div>details!</div>,
    main: () => <NotFound />
  },
];

export default routes;