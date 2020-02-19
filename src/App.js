import React from 'react';
import './App.css';
import MystereNav from './navbar';
import SiteCarousel from './carousel'
import Menu from './menu'
import './content.css'

function App() {
  return (
    <div className="App">
      <MystereNav/>
      <SiteCarousel/>
      <Menu/>
      <header className="App-header">
        <p>
          Welcome to Myster E's Science Class!
        </p>
      </header>
      <main>
      </main>

    </div>
  );
}


export default App;
