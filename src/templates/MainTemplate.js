import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { useLocation } from 'react-router-dom';
import PageContex from 'context';

const MainTemplate = ({ children }) => {
  const pageType = useLocation().pathname.slice(1);
  return (
    <PageContex.Provider value={pageType}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PageContex.Provider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
