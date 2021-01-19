import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0',
      contrastText: '#E0E0E0',
    },
    secondary: {
      main: '#d32f2f',
    },
    error: {
      main: '#db5858',
    },
    warning: {
      main: '#f79633',
    },
    success: {
      main: '#5fa463',
    },
    info: {
      main: '#35baf6',
    },
    divider: '#424242',
  },
  typography: {
    fontFamily: ['-apple-system', 'Roboto Slab', 'Roboto', 'serif'].join(','),
  },
  overrides: {
    MuiCardContent: {
      root: {
        overflowY: 'auto',
        listStyle: 'none',
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          backgroundColor: '#424242',
        },
      },
    },
    MuiList: {
      root: {
        overflowY: 'auto',
        listStyle: 'none',
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          backgroundColor: '#424242',
        },
      },
    },
    MuiListItemText: {
      secondary: {
        fontFamily: 'JetBrains Mono',
      },
    },
  },
});

export default responsiveFontSizes(theme);
