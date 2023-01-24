import React from 'react';
import Sidebar from 'components/organism/Sidebar/Sidebar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-left: 153px;
`;

const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    {children}
  </StyledWrapper>
);
export default UserPageTemplate;
