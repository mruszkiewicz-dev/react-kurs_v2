import React from 'react';
import { useLocation } from 'react-router-dom';

import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <DetailsTemplate match={location} />
      {console.log(children)}
    </>
  );
};
export default DetailsPage;
