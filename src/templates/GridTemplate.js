import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import NewItemBar from 'components/organism/NewItemBar/NewItemBar';
import UserPageTemplate from 'templates/UserPageTemplate';
import Buttonicon from 'components/atoms/Buttonicon/Buttonicon';
import plusIcon from 'assets/icons/plus.svg';
import widthContext from 'hoc/withContext';

const StyledGridWrapper = styled.div`
  position: relative;
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

const StyledButtonIcon = styled(Buttonicon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-size: 35%;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 50px;
  z-index: 100000;
`;

class GridTemplate extends React.Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { data, children, context } = this.props;
    const { isNewItemBarVisible } = this.state;
    return (
      <UserPageTemplate data={data}>
        <StyledHeaderWrapper>
          <Input search />
          <StyledHeading big as="h1">
            {context}
          </StyledHeading>
          <Paragraph>6 {context}s</Paragraph>
        </StyledHeaderWrapper>
        <StyledGridWrapper>{children}</StyledGridWrapper>
        <StyledButtonIcon activecolor={context} icon={plusIcon} onClick={this.toggleNewItemBar} />
        <NewItemBar handleClose={this.toggleNewItemBar} isVisible={isNewItemBarVisible} />
      </UserPageTemplate>
    );
  }
}
export default widthContext(GridTemplate);
