import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import  Sinatra  from '../images/Sinatra.png'
import  Rails from '../images/Rails.png'
import  Beattree from '../images/Beattree.png'

export default class Projects extends Component {
    
    componentDidMount(){
        document.body.style.background = "white";
       }

    render() {
        return (

            <div> 
                <h1 className='title'>
                i know, i know, i know 
                (i'm working on it)
                </h1>

            {/* <Card className='card_image_3'>
            <Card.Img src={Sinatra} alt="Card image" />
            <Card.ImgOverlay>
            <Card.Text>Billpay / Built with Sinatra </Card.Text>
                <Card.Text>gi<a className='a' href='https://github.com/kellysciandra/sinatra-billpay'>t</a></Card.Text>
                </Card.ImgOverlay>
            </Card>
        
            <Card className='card_image'>
            <Card.Img src={Beattree}/>
            <Card.ImgOverlay>
            <Card.Text>Beattree</Card.Text>
                <Card.Text>
                Built with React/Redux
                </Card.Text>
                <Card.Text><a className='a' href="https://github.com/kellysciandra/beattree">g</a>it</Card.Text>
                </Card.ImgOverlay>
            </Card>

            <Card className='card_image_2'>
            <Card.Img src={Rails} alt="Card image" />
            <Card.ImgOverlay>
            <Card.Text>Tour Keyboards</Card.Text>
                <Card.Text>
                Built with Rails 
                </Card.Text>
                <Card.Text>g<a  className='a' href="https://github.com/kellysciandra/TourKeyboards">i</a>t</Card.Text>
                </Card.ImgOverlay>
            </Card> */}


            </div>
        )
    }
}
