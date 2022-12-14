import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import { useLocation } from 'react-router-dom';

const DetailsTemplate = () => {
  const location = useLocation();
  return (
    <UserPageTemplate>
      <p>ss</p>
      {console.log(location)}
    </UserPageTemplate>
  );
};

export default DetailsTemplate;
