import React from 'react';
import { useLocation } from 'react-router-dom';

import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = () => {
  const location = useLocation();
  return <DetailsTemplate match={location} />;
};
export default DetailsPage;
