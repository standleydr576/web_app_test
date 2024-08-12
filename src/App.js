// src/App.js

import React from 'react';
import WeatherWidget from '../src/components/WeatherWidget';
import Build from '../src/components/Build';
import Chat from '../src/components/Chat';
import Creations from '../src/components/Creations';
import Features from '../src/components/Features';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Slider from '../src/components/Slider';
import './App.css';
import './WeatherWidget.css';


function App() {
  return (
    <div className="App">


      <Header />
      <header className="App-header">
        <WeatherWidget />
      </header>
      <Slider/>
      <Hero />
      <Build />
      <Chat/>
      <Features/>
      <Creations/>
    </div>
  );
}

export default App;
