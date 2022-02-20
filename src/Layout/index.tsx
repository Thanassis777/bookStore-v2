import React from 'react';
import './Layout.scss';

const Layout = ({children}: any) => {
  return (
    <>
      <div className="box">
        <h1>BookStore</h1>
      </div>
      <main>{children}</main>
      <div id="footer" className="box" />
    </>
  );
};

export default Layout;
