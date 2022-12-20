import React from 'react';
import Card from 'components/moleculs/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const data = [
  {
    id: 1,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
  {
    id: 2,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
  {
    id: 3,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
  {
    id: 4,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
  {
    id: 5,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
  },
];

const Article = () => (
  <GridTemplate data={data} pageType="article">
    {data.map((item) => (
      <Card
        id={item.id}
        cardType="article"
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

export default Article;
