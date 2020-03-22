import React from 'react';
import './App.sass';
import Home from './components/screens/home';
import Header from './components/header';
import Sections from './components/screens/sections';
import ScrollButton from './components/scroll-btn';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Sections />
      <ScrollButton />
    </React.Fragment>
  );
}

export default App;
