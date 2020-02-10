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

// TODOS
//delete starter info from create-react-app
//navbar
//add current event section
//add main content


export default App;
