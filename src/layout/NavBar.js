import React from "react";
import Navbar from 'react-bootstrap/Navbar'


function NavBar() {
    return (
        <div>
            
            <Navbar className='nav_bar'>
                <main>
                    <span>
                        <p>kellysciandradev</p>
                    </span>
                </main>

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