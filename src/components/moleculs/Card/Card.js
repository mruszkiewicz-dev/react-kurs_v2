import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsl(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const StyledInnerWrapper = styled.div`
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : 'white')};
  padding: 17px 30px 10px;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <StyledInnerWrapper activeColor={cardType}>
      <StyledHeading>aa</StyledHeading>
      <DateInfo>3 dni</DateInfo>
    </StyledInnerWrapper>
    <StyledInnerWrapper flex>
      <Paragraph>aaaasdasd</Paragraph>
      <Button secondary>Remove</Button>
    </StyledInnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};
export default Card;
