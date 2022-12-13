import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';

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

const Note = () => (
  <GridTemplate pageType="note">
    {data.map((item) => (
      <Card
        cardType="note"
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

export default Note;
