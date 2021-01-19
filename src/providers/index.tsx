import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { I18nextProvider } from 'react-i18next';

import GlobalStyle from '../styles/global';
import MaterialTheme from '../styles/MaterialTheme';
import i18n from '../languages/i18n';

const AppProvider: React.FC = () => (
  <ThemeProvider theme={MaterialTheme}>
    <I18nextProvider i18n={i18n}>
      <GlobalStyle />
    </I18nextProvider>
  </ThemeProvider>
);

export default AppProvider;
