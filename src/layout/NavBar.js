import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

function NavBar() {
    const [width, setWidth] = React.useState(window.innerWidth);
    // const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        // setHeight(window.innerHeight);
    };


    // const returnAbout = () => {
    //     if (width >= 400) return  <Nav.Link href='/about' className='nav_link'>about</Nav.Link>
    // }
    // const returnProject = () => {
    //     if (width >= 400) return  <Nav.Link href="/projects" className='nav_link'>projects</Nav.Link>
    // }

    return (
        <div>
            
            <Navbar className='nav_bar'>
                <main>
                    <span>
                        <p>kellysciandradev</p>
                    </span>
                </main>
       
            {/* {returnProject()}
            {returnAbout()} */}
            <div className='nav_links'>
            <a href='https://linkedin.com/in/kelly-sciandra-464b371a0'  className='nav_links2'>LinkedIn</a>|
            <a href='https://github.com/kellysciandra' className='nav_links2'>Github</a>|
            <a href='https://open.spotify.com/artist/0JyCM9EwjQZZzQPGTSM1qc'>Music</a>|
            <a href='https://www.instagram.com/kellynobody/'>Instagram</a> 
            </div>
            </Navbar>   

            <div className='nav_links_mobile'>
            <a href='https://linkedin.com/in/kelly-sciandra-464b371a0'  className='nav_links2'>LinkedIn</a>|
            <a href='https://github.com/kellysciandra' className='nav_links2'>Github</a>|
            <a href='https://open.spotify.com/artist/0JyCM9EwjQZZzQPGTSM1qc'>Music</a>|
            <a href='https://www.instagram.com/kellynobody/'>Instagram</a> 
            </div>
        </div>
    );
}

export default NavBar;