import React from 'react';

import SimpleFunc from './SimpleFunc'
import SimpleClass from './SimpleClass'
import WithStateClass from './WithStateClass'
import WithStateHook from './WithStateHook'

function App() {
  return (
    <>
      <SimpleClass />
      <SimpleFunc />
      <WithStateClass />
      <WithStateHook />
    </>
  );
}

export default App;
