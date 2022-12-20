import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';

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

const GridTemplate = ({ data, children, pageType }) => (
  <UserPageTemplate data={data} pageType={pageType}>
    <StyledHeaderWrapper>
      <Input search />
      <StyledHeading big as="h1">
        {pageType}ss
      </StyledHeading>
      <Paragraph>6 {pageType}s</Paragraph>
    </StyledHeaderWrapper>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </UserPageTemplate>
);
export default GridTemplate;
