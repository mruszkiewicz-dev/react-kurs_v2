import React from 'react';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import widthContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

const StyledWrapper = styled.div`
  margin-left: 100px;
  padding: 10px;
  width: 500px;
  position: relative;
  top: 20px;
`;

const StyledLinkRemove = styled.a`
  padding: 20px;
  text-decoration: underline;
  color: black;
`;

const StyledLinkP = styled.a`
  text-decoration: underline;
  text-transform: uppercase;
  color: black;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledWrapperButton = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const Details = ({ context, data }) => {
  const id = useLocation().pathname.replace(/\/(.*)\//, '');
  const details = data[context][id - 1];
  return (
    <StyledWrapper>
      <Heading big>{details.title}</Heading>
      <Paragraph bold>Created - {details.date}</Paragraph>
      <Paragraph>{details.content}</Paragraph>
      {context !== 'note' && (
        <StyledLinkP bold href={details.link}>
          Open this {context}
        </StyledLinkP>
      )}
      <StyledWrapperButton>
        <Button activeColor={context}>CLOSE / SAVE</Button>
        <StyledLinkRemove href="a">remove note</StyledLinkRemove>
      </StyledWrapperButton>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  data: state,
});

export default connect(mapStateToProps)(widthContext(Details));
