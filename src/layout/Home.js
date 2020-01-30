import React, { Component } from 'react'

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
            <div >
                <div className='main'> 
                <div className='git-box'>
                <span>
                <a onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleGit()} href={'https://github.com/kellysciandra'}>
                <i class="fab fa-github fa-5x"></i>
                 <h2 className='hover_g'>{this.state.git}</h2> 
                </a>
                </span>
                </div>

                <div className='linkedin-box'>
                <span >
                <a onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleLinkedIn()} href={'https://linkedin.com/in/kelly-sciandra-464b371a0'}>
                <i class="fab fa-linkedin-in fa-5x"></i>
                <h2 className='hover_l'>{this.state.linkedin}</h2>
                 </a>
                </span>
                </div>
              
                <div className='insta-box'>
                <span>
                <a onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleInstagram()} href={'https://www.instagram.com/kellynobody/'}>
                <i class="fab fa-instagram fa-5x"></i>
                <h2 className='hover_i'>{this.state.instagram}</h2> 
                </a>
                </span>
                </div>
            </div>
            <div className='contact'>
                <div className='contact_text'>
                <a href='mailto:kellysciandradev@icloud.com'><i class="fas fa-envelope-square fa-3x"></i></a>
                <a href='https://open.spotify.com/artist/0JyCM9EwjQZZzQPGTSM1qc'><i class="fab fa-spotify fa-3x"></i></a>
                </div>
                </div>
            </div>
        )
    }
}