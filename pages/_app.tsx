import React, { ReactElement } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/tokens';
import { GlobalStyle } from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
export default MyApp;
