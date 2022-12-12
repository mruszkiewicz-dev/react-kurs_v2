import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Buttonicon from 'components/atoms/Buttonicon/Buttonicon';
import Heading from 'components/atoms/Heading/Heading';
import PenIcon from 'assets/icons/pen.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import BulbIcon from 'assets/icons/bulb.svg';
import LogoutIcon from 'assets/icons/logout.svg';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.note};
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
`;

const Sidebar = () => (
  <StyledWrapper>
    <Heading>Logo</Heading>
    <StyledWrapperButton>
      <StyledButtonicon component={Link} to="/" icon={PenIcon} />
      <StyledButtonicon component={Link} to="/articles" icon={TwitterIcon} />
      <StyledButtonicon component={Link} to="/twitters" icon={BulbIcon} />
    </StyledWrapperButton>
    <Buttonicon component={Link} to="/" icon={LogoutIcon} />
  </StyledWrapper>
);

export default Sidebar;
