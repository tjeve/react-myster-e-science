import React from 'react';
import './App.css';
import MystereNav from './navbar';
import SiteCarousel from './content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MystereNav/>
        <SiteCarousel/>
        <p>
          Welcome to Myster E's Science Class!
        </p>
      </header>


    </div>
  );
}

// TODOS
//delete starter info from create-react-app
//navbar
//add current event section
//add main content


export default App;
