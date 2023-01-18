import React from 'react';
import Sidebar from 'components/organism/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);
export default UserPageTemplate;
