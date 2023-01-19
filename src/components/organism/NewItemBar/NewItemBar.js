import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import widthContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  position: fixed;
  z-index: 999;
  display: flex;
  top: 0;
  right: 0;
  padding: 100px 50px;
  flex-direction: column;
  height: 100vh;
  width: 680px;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;
const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ context, isVisible }) => {
  const pageInfo = context.slice(0, -1);
  return (
    <StyledWrapper isVisible={isVisible} activecolor={context}>
      <Heading>Add a new {pageInfo}</Heading>
      <Paragraph>A {pageInfo}</Paragraph>
      <StyledInput placeholder="title" />
      {context === 'articles' && <StyledInput placeholder="link" />}
      <StyledTextArea as="textarea" placeholder="descrition" />
      <Button activeColor={context}>Add {pageInfo}</Button>
    </StyledWrapper>
  );
};
export default widthContext(NewItemBar);
