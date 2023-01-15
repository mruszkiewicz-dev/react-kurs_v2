/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PageContext from 'context';

const widthContex = (Comment) =>
  function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => <Comment {...props} context={context} />}
      </PageContext.Consumer>
    );
  };

export default widthContex;
