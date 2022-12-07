import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <p>TES</p>
    <Button>close / Save</Button>
    <Button secondary>remove</Button>
  </>
);

export default Root;
