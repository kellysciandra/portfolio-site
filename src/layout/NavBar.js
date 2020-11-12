import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

function NavBar() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    const returnTitle = () => {
        if (width >= 1317) return  <h1 className='title'></h1> 
    }
    const returnPallet = () => {
        if (width >= 1021) return  <Nav.Link href='/pallets' className='link_text'>about</Nav.Link>
    }
    const returnProject = () => {
        if (width >= 518) return  <Nav.Link href="/projects" className='link_text'>projects</Nav.Link>
    }

    return (
        <div>

            
            <Navbar className='nav_bar' expand="lg" >
            <Navbar.Brand href="/">kellysciandradev</Navbar.Brand>/
            {returnProject()}
            {returnPallet()}
            {returnTitle()}
            <div className='contact'>
                        <div className='contact_text'>
                        <a href='https://linkedin.com/in/kelly-sciandra-464b371a0'><i class="fab fa-linkedin-in fa-2x"></i></a>
                        <a href='mailto:kellysciandradev@icloud.com'><i class="fas fa-envelope-square fa-2x"></i></a>
                        <a href='https://open.spotify.com/artist/0JyCM9EwjQZZzQPGTSM1qc'><i class="fab fa-spotify fa-2x"></i></a>
                        <a href='https://github.com/kellysciandra'><i class="fab fa-github fa-2x"></i></a>
                        <a href='https://www.instagram.com/kellynobody/'><i class="fab fa-instagram fa-2x"></i></a>
                        </div>
                    </div>
            </Navbar>

        
        </div>
    );
}

export default NavBar;