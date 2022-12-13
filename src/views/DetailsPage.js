import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = ({ match }) => (
  <>
    <DetailsTemplate />
    {console.log({ match })}
  </>
);
export default DetailsPage;
