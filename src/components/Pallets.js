import React, { Component } from 'react'

export default class Pallets extends Component {
    constructor() {
        super()
        this.state= {
            firstPallet: [],
            secondPallet: []
        }
    }

    componentDidMount(){
        document.body.style.background = "white";
       }

    handleFirst(e) {
        console.log()
        this.setState({
            firstPallet: [
                 '#182628', 
                 '#65CCB8', 
                 '#3B945E', 
                 '#57BA98', 
                 '#F2F2F2' 
                ]
        })
    }


    handleSecond(e) {
        console.log()
        this.setState({
            secondPallet: [
                '#FBE8A6', 
                '#F4976C', 
                '#303C6C', 
                '#B4DFE5', 
                '#D2FDFF' 
            ]
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
                
            <div onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleFirst()} className='first_pallet'> 
                <div className='pallet_1'> 
                </div>
                <div className='pallet_2'>
                </div>
                <div className='pallet_3'>
                </div>
                <div className='pallet_4'>
                </div>
                <div className='pallet_5'>
                </div>
                {this.state.firstPallet ? this.state.firstPallet.map((pallet) => 
                    <p className='first_pallet_text'>{pallet}</p>
                ): null}
            </div>
           
             <div onMouseLeave={() => this.onMouseOut()} onMouseOver={() => this.handleSecond()} className='second_pallet'>
                <div className='pallet_6'>
                </div>
                <div className='pallet_7'>
                </div>
                <div className='pallet_8'>
                </div>
                <div className='pallet_9'>
                </div>
                <div className='pallet_10'>
                </div>
                {this.state.secondPallet ? this.state.secondPallet.map((pallet) => 
                    <p className='second_pallet_text'>{pallet}</p>
                ): null}
          
            </div>


            {/* <div className='third_pallet'>
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
            </div>  */}

            <a href="/pallets/1" className='next_page'>next</a>
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
