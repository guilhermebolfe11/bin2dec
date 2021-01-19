import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import GlobalStyle from '../styles/global';
import MaterialTheme from '../styles/MaterialTheme';
import Home from '../pages/Home';

const AppProvider: React.FC = () => (
  <ThemeProvider theme={MaterialTheme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);

export default AppProvider;
