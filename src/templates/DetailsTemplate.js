import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Details from 'components/organism/Details/Details';

const DetailsTemplate = ({ children }) => (
  <UserPageTemplate>
    <Details data={children} />
  </UserPageTemplate>
);

export default DetailsTemplate;
