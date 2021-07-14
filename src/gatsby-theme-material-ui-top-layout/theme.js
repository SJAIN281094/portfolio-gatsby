import { createTheme } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      contrastText: '#e6e195',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto'].join(','),
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
});

export default theme;
