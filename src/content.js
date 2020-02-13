import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css'

class Menu extends React.Component {
    render() {
      return (
        <div class='main-content'>Choose a Category!</div>
        <div>Matter and Energy</div>
        <div>Force and Motion</div>
        <div>Earth and Space</div>
        <div>Organisms and Environments</div>
      )
    }
  }

export default Menu; 