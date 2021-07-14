import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './src/components/organisms/layout';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <CssBaseline />
      {element}
    </>
  );
};
