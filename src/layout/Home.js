import React, { Component } from 'react'
import unreleased from '../images/logo_transparent.png'
import really_good from '../images/logo_transparent_really.png'
import joya from '../images/logo_transparent_joya.png'
import dev from '../images/logo_transparent_dev.png'


export default class Home extends Component {
    constructor() {
        super()
        this.state = {
  
        }
    }

    render() {
        return (
            <div>
                <div className='copy'>
                Hi. <br/><br></br>
                My name is Kelly Sciandra.<br></br><br></br>
                <h4>I like to create</h4>functional and attractive digital environments, ensuring a great user experience.<br></br><br></br>
                <h4>I like to use</h4>modern JavaScript frameworks, including React, Redux, and Next.js.<br></br><br></br>
                <a href='mailto:kellysciandradev@icloud.com' className='nav_links2'>Email</a>me here if you'd like to work together. 
                
       
                </div>
                <div>
                <img src={require('../images/bbr.gif')} alt="loading..." className='bbr'/>
                </div>
             
            
                <div className='showcase'> 
                    <div className='photo'>
                    <a href='https://itsjoya.com'><img src={joya} alt='' height='' width='' className='logo'/></a>     
                    <a href='https://unreleased.dev'><img src={unreleased}  alt='' height='' width='' className='logo'></img></a>
                    <a href='https://reallygoodrecipes.net'><img src={dev} alt='' height='' width='' className='logo'/></a> 
                    <a href='https://frontenddev.academy'><img src={really_good} alt='' height='' width='' className='logo'/></a> 
                    </div>
                </div>
                    {/* photo_mobile */}
                    <div className='photo_mobile'>
                    <a href='https://itsjoya.com'><img src={joya} alt='' height='' width='' className='logo'/></a>    
                    <a href='https://unreleased.dev'><img src={unreleased}  alt='' height='' width='' className='logo'></img></a>    
                    <a href='https://reallygoodrecipes.net'><img src={dev} alt='' height='' width='' className='logo'/></a> 
                    <a href='https://frontenddev.academy'><img src={really_good} alt='' height='' width='' className='logo'/></a> 
                    </div>

              
            
                <div className='footer'>
                    2020kellysciandradev2020kellysciandradev2020kellysciandradev2020kellysciandradev2020kellysciandradev2020kellysciandradev2020kellysciandradev2020kellysciandradev
                </div>
                <div className='footer_mobile'>
                    2020kellysciandradev2020kellysciandradev2020
                </div>

            </div>
        )
    }
}






