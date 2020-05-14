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
      </header>
      <main>
        <p>
          Welcome to Myster E's Science and Technology Class!
        </p>
      </main>

    </div>
  );
}


export default App;
