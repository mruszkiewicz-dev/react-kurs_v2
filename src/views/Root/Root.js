import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import GlobalStyle from 'theme/GlobalStyle';
import Input from 'components/atoms/Input/Input';
import Buttonicon from 'components/atoms/Button/Buttonicon/Buttonicon';
import bulbIcon from 'assets/icons/bulb.svg';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Heading big>Big</Heading>
        <Heading>Normall</Heading>
        <Buttonicon icon={bulbIcon} />
        <Paragraph>
          Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American jazz trumpeter,
          bandleader, and composer.
        </Paragraph>
        <Input search placeholder="login" />
        <Paragraph bold>teksss</Paragraph>
        <Button>close / Save</Button>
        <Button secondary>remove</Button>
      </>
    </ThemeProvider>
  </>
);

export default Root;
