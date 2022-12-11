import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Heading big>Big</Heading>
        <Heading>Normall</Heading>
        <Paragraph>
          Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American jazz trumpeter,
          bandleader, and composer.
        </Paragraph>
        <Paragraph bold>teksss</Paragraph>

        <Button>close / Save</Button>
        <Button secondary>remove</Button>
      </>
    </ThemeProvider>
  </>
);

export default Root;
