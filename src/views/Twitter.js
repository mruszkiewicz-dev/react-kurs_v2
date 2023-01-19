import React from 'react';
import Card from 'components/moleculs/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';

const Twitter = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map((item) => (
      <Card
        id={item.id}
        cardType="twitters"
        title={item.title}
        date={item.date}
        avatar={item.avatar}
        link={item.link}
        content={item.content}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => ({
  twitters: state.twitters,
});

export default connect(mapStateToProps)(Twitter);
