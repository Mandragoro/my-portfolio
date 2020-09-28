import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7b68ee',
    },
    secondary: {
      main: '#00d1b2',
    },
  },
  typography: {
    fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif',
  }
});

theme = responsiveFontSizes(theme);

export default theme;