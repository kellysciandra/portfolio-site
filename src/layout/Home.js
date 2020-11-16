import React, { Component } from 'react'
import unreleased from '../images/logo_transparent.png'
import really_good from '../images/logo_transparent_really.png'
import joya from '../images/logo_transparent_joya.png'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
  
        }
    }

    render() {
        return (
            <div>
                <div className='main'> 
                    <div className='photo'>    
                    <a href='https://unreleased.dev'><img src={unreleased}  alt='' height='400' width='400'   className='link_text'></img></a>
                    <a href='https://reallygoodrecipes.net'><img src={really_good} alt='' height='400' width='400'  className='link_text'/></a> 
                    <a href='https://itsjoya.com'><img src={joya} alt='' height='400' width='400'  className='link_text'/></a> 
                    </div>
                    
                    {/* photo_mobile */}

                    <div className='photo_mobile'>
                    <a href='https://unreleased.dev'><img src={unreleased}  alt='' height='50' width='50'   className='link_text'></img></a>
                    </div>
                    
                    <div className='photo_mobile'>
                    <a href='https://reallygoodrecipes.net'><img src={really_good} alt='' height='200' width='200'  className='link_text'/></a> 
                    </div>
                    <div className='photo_mobile'>
                    <a href='https://itsjoya.com'><img src={joya} alt='' height='200' width='200'  className='link_text'/></a> 
                    </div>
                   
                    
                    <br></br> <br></br> 

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






