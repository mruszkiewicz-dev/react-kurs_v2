import React from 'react';
import Card from 'components/moleculs/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';

const Article = ({ articles }) => (
  <GridTemplate data={articles} pageType="articles">
    {articles.map((item) => (
      <Card
        id={item.id}
        cardType="articles"
        title={item.title}
        date={item.date}
        avatar={item.avarat}
        link={item.link}
        content={item.content}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps)(Article);
