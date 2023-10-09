/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useClient } from 'theme-ui';
import React from 'react';
import NewItem from './new-item';

function Page() {
  return (
    <div>
      <h1>This is the Page component</h1>
      <NewItem />
    </div>
  );
}

export default Page;
