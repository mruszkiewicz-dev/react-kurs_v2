import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';

const data = [
  {
    id: 1,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
  {
    id: 2,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
  {
    id: 3,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
  {
    id: 4,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
  {
    id: 5,
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
];

const Twitter = () => (
  <GridTemplate pageType="twitter">
    {data.map((item) => (
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

export default Twitter;
