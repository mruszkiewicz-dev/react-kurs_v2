import React from 'react';

import Sidebar from 'components/organism/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);
export default UserPageTemplate;
