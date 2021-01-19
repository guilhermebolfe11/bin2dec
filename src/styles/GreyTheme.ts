import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: ['-apple-system', 'Roboto Slab', 'Roboto', 'serif'].join(','),
  },
});

export default responsiveFontSizes(theme);
