import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/organism/Sidebar/Sidebar';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  padding: 25px 150px 25px 70px;
`;

const StyledHeaderWrapper = styled.div`
  margin: 25px 85px;
`;

const StyledHeading = styled(Heading)`
  ::first-letter {
    text-transform: uppercase;
  }
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledHeaderWrapper>
      <Input search />
      <StyledHeading big as="h1">
        {pageType}s
      </StyledHeading>
      <Paragraph>6 {pageType}s</Paragraph>
    </StyledHeaderWrapper>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </>
);
export default UserPageTemplate;
