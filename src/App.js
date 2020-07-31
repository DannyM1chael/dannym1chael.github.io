import React from 'react';
import './App.sass';
import { Header, Home, ScrollButton, Sections } from './components';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Sections />
      <ScrollButton />
    </>
  );
}

export default App;
