import React from 'react';

import SimpleFunc from './components/SimpleFunc'
import SimpleClass from './components/SimpleClass'
import WithStateClass from './components/WithStateClass'
import WithStateHook from './components/WithStateHook'

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
