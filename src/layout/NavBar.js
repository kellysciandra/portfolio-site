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
        if (width >= 1317) return  <h1 className='title'>Full Stack Web Developer</h1> 
    }
    const returnPallet = () => {
        if (width >= 1021) return  <Nav.Link href='/pallets' className='link_text'>palettes</Nav.Link>
    }
    const returnProject = () => {
        if (width >= 518) return  <Nav.Link href="/projects" className='link_text'>projects</Nav.Link>
    }

    return (
        <div>
        <Navbar className='nav_bar' expand="lg" >
        <Navbar.Brand href="/">bonjovie</Navbar.Brand>/
        {/* {returnProject()}
        {returnPallet()} */}
        {returnTitle()}
        </Navbar>
        </div>
    );
}

export default NavBar;