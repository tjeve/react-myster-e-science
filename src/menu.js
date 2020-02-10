import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css'

class Menu extends React.Component {
    render() {
      return (
        <div class='menu'>
            <div>Category 1: Matter and Energy</div>
                <ul>
                    <li>8.5A - Atomic Structure</li>
                    <li>8.5B - Atom Identity and Reactivity</li>
                    <li>8.5C - Periodic Table Structure</li>
                    <li>8.5D - Counting Atoms, Elements and Molecules</li>
                    <li>8.5E - Law of Conservation of Mass</li>
                </ul>
            <div>Category 2: Force and Motion</div>
                <ul>
                    <li>8.6A - Calculating Force</li>
                    <li>8.6B - Speed, Velocity and Acceleration</li>
                    <li>8.6C - Newton's Laws</li>
                </ul>
            <div>Category 3: Earth and Space</div>
            <div>Category 4: Organisms and Environments</div>
        </div> 
      )
    }
  }

export default Menu; 