import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';
import { connect } from 'react-redux';

const Note = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map((item) => (
      <Card
        id={item.id}
        cardType="notes"
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
  notes: state.notes,
});

export default connect(mapStateToProps)(Note);
