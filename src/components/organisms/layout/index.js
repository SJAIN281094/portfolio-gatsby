import React from 'react';
import Header from '../../molecules/header';

function Layout(props) {
  return (
    <>
      <Header
        links={[
          { title: 'PORTOFOLIO', href: '#' },
          { title: 'CONTACT', href: '#' },
        ]}
      />
      {props.children}
    </>
  );
}

export default Layout;
