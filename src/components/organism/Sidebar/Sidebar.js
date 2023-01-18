import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Buttonicon from 'components/atoms/Buttonicon/Buttonicon';
import Heading from 'components/atoms/Heading/Heading';
import PenIcon from 'assets/icons/pen.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import BulbIcon from 'assets/icons/bulb.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import widthContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.notes)};
  display: grid;
  grid-template-rows: 0.1fr 1fr 0.1fr;
  justify-items: center;
  align-self: center;
  position: fixed;
  margin: 0;
  padding: 20px 0 20px 0;
  top: 0;
  left: 0;
  width: 153px;
  height: 100vh;
`;
const StyledWrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  align-content: center;
`;
const StyledButtonicon = styled(Buttonicon)`
  margin: 20px;
  &.active {
    background-color: white;
  }
`;

const Sidebar = ({ context }) => (
  <StyledWrapper activeColor={context}>
    <Heading>Logo</Heading>
    <StyledWrapperButton>
      {context}
      <StyledButtonicon as={NavLink} to="/notes" icon={PenIcon} />
      <StyledButtonicon as={NavLink} to="/twitters" icon={TwitterIcon} />
      <StyledButtonicon as={NavLink} to="/articles" icon={BulbIcon} />
    </StyledWrapperButton>
    <Buttonicon as={NavLink} to="/" icon={LogoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  context: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  context: 'notes',
};

export default widthContext(Sidebar);
