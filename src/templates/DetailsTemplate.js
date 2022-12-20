import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import { useLocation } from 'react-router-dom';

const DetailsTemplate = () => {
  const location = useLocation();
  return (
    <UserPageTemplate>
      <p>{`is twi: ${location.pathname.includes('twitter')}`}</p>
      <p>{`is art: ${location.pathname.includes('article')}`}</p>
      <p>{`is noe: ${location.pathname.includes('note')}`}</p>
    </UserPageTemplate>
  );
};

export default DetailsTemplate;
