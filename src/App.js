import React from 'react';
import './App.sass';
import Home from './components/screens/home';
import Header from './components/header';
import About from './components/screens/about';
import Resume from './components/screens/resume';
import Contact from './components/screens/contact';
import Portfolio from './components/screens/portfolio';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}

export default App;
