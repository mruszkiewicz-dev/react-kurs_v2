import React from 'react';
import Card from 'components/moleculs/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const data = [
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
];

const Article = () => (
  <GridTemplate pageType="article">
    {data.map((item) => (
      <Card
        cardType="article"
        title={item.title}
        date={item.date}
        avatar={item.avarat}
        link={item.link}
        content={item.content}
        key={item.title}
      />
    ))}
  </GridTemplate>
);

export default Article;
