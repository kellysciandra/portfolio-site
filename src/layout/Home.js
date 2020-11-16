import React, { Component } from 'react'
import unreleased from '../images/logo_transparent.png'
import really_good from '../images/logo_transparent_really.png'
import joya from '../images/logo_transparent_joya.png'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            git: '',
            linkedin: '',
            instagram: ''
        }
    }

    handleGit(e) {
        this.setState({
            git: 'GITHUB'
        })
    }
    handleLinkedIn(e) {
        this.setState({
            linkedin: 'LinkedIn'
        })  
    }
    handleInstagram(e) {
        this.setState({
            instagram: 'INSTAGRAM'
        })
    }
    onMouseOut() {
        this.setState({
            git: '',
            linkedin: '',
            instagram: ''
        })
    }

    render() {
        return (
            <div>
                <div className='main'> 
                    <div className='photo'>    
                    <a href='https://unreleased.dev'><img src={unreleased} height='400' width='400'   className='link_text'></img></a>
                    <a href='https://reallygoodrecipes.net'><img src={really_good} height='400' width='400'  className='link_text'/></a> 
                    <a href='https://itsjoya.com'><img src={joya} height='400' width='400'  className='link_text'/></a> 
                    </div>
                    <br></br> <br></br> <br></br> <br></br> <br></br> 
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

















                    {/* 
                        hover link feature
                        <div className='my-links'>
               
                        <div className='linkedin-box'>
                        <span >
                        <a onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleLinkedIn()} href={'https://linkedin.com/in/kelly-sciandra-464b371a0'}>
                        <i class="fab fa-linkedin-in fa-3x"></i>
                        <h2 className='hover_l'>{this.state.linkedin}</h2>
                        </a>
                        </span>
                        </div>

                        <div className='git-box'>
                        <span>
                        <a onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleGit()} href={'https://github.com/kellysciandra'}>
                        <i class="fab fa-github fa-3x"></i>
                        <h2 className='hover_g'>{this.state.git}</h2> 
                        </a>
                        </span>
                        </div>
                
                        <div className='insta-box'>
                        <span>
                        <a onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleInstagram()} href={'https://www.instagram.com/kellynobody/'}>
                        <i class="fab fa-instagram fa-3x"></i>
                        <h2 className='hover_i'>{this.state.instagram}</h2> 
                        </a>
                        </span>
                        </div>
                    </div> */}