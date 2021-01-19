import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['-apple-system', 'Roboto Slab', 'Roboto', 'serif'].join(','),
  },
});

export default responsiveFontSizes(theme);
