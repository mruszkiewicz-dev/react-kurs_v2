import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Details from 'components/organism/Details/Details';
import widthContext from 'hoc/withContext';

const DetailsTemplate = ({ props, context }) => (
  <UserPageTemplate>
    <Details context={context} />
    {console.log(props)}
  </UserPageTemplate>
);

export default widthContext(DetailsTemplate);
