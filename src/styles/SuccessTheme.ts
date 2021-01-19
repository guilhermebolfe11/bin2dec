import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5fa463',
    },
  },
  typography: {
    fontFamily: ['-apple-system', 'Roboto Slab', 'Roboto', 'serif'].join(','),
  },
});

export default responsiveFontSizes(theme);
