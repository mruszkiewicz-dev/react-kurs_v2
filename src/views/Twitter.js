import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';
import { connect } from 'react-redux';

const Twitter = ({ twitters }) => (
  <GridTemplate pageType="twitter">
    {twitters.map((item) => (
      <Card
        id={item.id}
        cardType="twitter"
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

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitter);
