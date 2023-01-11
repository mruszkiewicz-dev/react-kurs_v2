import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

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
  position: relative;
  :first-of-type {
    z-index: 999;
  }
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

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  border-radius: 50px;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

class Card extends React.Component {
  state = {
    as: false,
  };

  handleCardClick = () => this.setState({ as: true });

  render() {
    const { id, cardType, title, date, avatar, link, content, removeItem } = this.props;
    const { as } = this.state;
    if (as) {
      return <Navigate to={`${id}`} />;
    }
    return (
      <StyledWrapper>
        <StyledInnerWrapper onClick={this.handleCardClick} activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{date}</DateInfo>
          {cardType === 'twitters' && <StyledAvatar src={avatar} />}
          {cardType === 'articles' && <StyledLinkButton href={link} />}
        </StyledInnerWrapper>
        <StyledInnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(cardType, id)} secondary>
            Remove
          </Button>
        </StyledInnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  link: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  avatar: null,
  link: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
