import React, { Component } from 'react'

export default class Pallets1 extends Component {
    constructor() {
        super()
        this.state= {
            firstPallet: [],
            secondPallet: [],

        }
    }

    componentDidMount(){
        document.body.style.background = "white";
       }

    handleFirst(e) {
        this.setState({
            firstPallet: [
                '#A64AC9', 
                '#FCCD04', 
                '#FFB48F', 
                '#17E9E0', 
                '#F5E6CC' ]
        })
    }


    handleSecond(e) {
        this.setState({
            secondPallet: [
                '#314455',
                '#644E5B',
                '#9E5A63',
                '#C96567', 
                '#97AABD' ]
        })
    }

    onMouseOut() {
        this.setState({
            firstPallet: '',
            secondPallet: ''
        })
    }

    render() {
        return (
            <div>
                
            <div onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleFirst()} className='third_pallet'> 
                <div className='pallet_11'> 
                </div>
                <div className='pallet_12'>
                </div>
                <div className='pallet_13'>
                </div>
                <div className='pallet_14'>
                </div>
                <div className='pallet_15'>
                </div>
                {this.state.firstPallet ? this.state.firstPallet.map((pallet) => 
                    <p className='first_pallet_text'>{pallet}</p>
                ): null}
            </div>
           
             <div onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleSecond()} className='fourth_pallet'>
                <div className='pallet_16'>
                </div>
                <div className='pallet_17'>
                </div>
                <div className='pallet_18'>
                </div>
                <div className='pallet_19'>
                </div>
                <div className='pallet_20'>
                </div>
                {this.state.secondPallet ? this.state.secondPallet.map((pallet) => 
                    <p className='second_pallet_text'>{pallet}</p>
                ): null}
          
            </div>

            <a href="/pallets/" className='next_page'>next</a>

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
