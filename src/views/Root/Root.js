import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <p>TES</p>
        <Button>close / Save</Button>
        <Button secondary>remove</Button>
      </>
    </ThemeProvider>
  </>
);

export default Root;
