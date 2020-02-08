import React from 'react';
import { Carousel } from "react-bootstrap"
import { Button } from 'react-bootstrap'
import './carousel.css'

class SiteCarousel extends React.Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <Button>
                        <div class="title">
                            <h1>Welcome to Myster E's Science Class!</h1>
                        </div>
                    </Button>
                    <Carousel.Caption>
                    <h3>Navigate to different parts of the page using the menu</h3>
                    <p>Learn something new today.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Button>
                        <div class="title">
                            <iframe src="https://giphy.com/embed/Z8k6qo0AVIsPdROQNd" title="carbon" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        </div> 
                   </Button>
                    <Carousel.Caption>
                    <h3>Category 1: Matter and Energy</h3>
                    <p>Learn about atoms, the periodic table and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Button>
                        <div class="title">   
                            <iframe src="https://giphy.com/embed/j9iEAGTBsVqHm" title="inertia" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/inertia-j9iEAGTBsVqHm">via GIPHY</a></p>
                        </div>
                    </Button>
                    <Carousel.Caption>
                    <h3>Category 2: Force and Motion</h3>
                    <p>Learn about Force and Newton's Laws of Motion</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Button>
                        <div class="title">
                            <iframe src="https://giphy.com/embed/3og0IFrHkIglEOg8Ba" title="galaxy" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/universe-spiral-galaxy-star-cluster-vortex-konczakowski-3og0IFrHkIglEOg8Ba">via GIPHY</a></p>
                        </div>
                    </Button>
                    <Carousel.Caption>
                    <h3>Category 3: Earth and Space</h3>
                    <p>Learn about the Seasons, Moon Phases, and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Button>
                    <div class="title">
                        <iframe src="https://giphy.com/embed/Ly0UgFZxyTVxm" title="evolution" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/transparent-evolution-Ly0UgFZxyTVxm">via GIPHY</a></p>
                    </div>
                    </Button>
                    <Carousel.Caption>
                    <h3>Category 4: Earth and Space</h3>
                    <p>Learn about Ecosystems, Organisms, and Biodiversity</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}


export default SiteCarousel