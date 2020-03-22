import React from 'react';
import './App.sass';
import Home from './components/screens/home';
import Header from './components/header';
import Sections from './components/screens/sections';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Sections />
    </React.Fragment>
  );
}

export default App;
