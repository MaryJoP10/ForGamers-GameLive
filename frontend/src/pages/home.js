import React from 'react';
import '../styles/home.css';
import game from '../images/gameover.png';
import wpp from '../images/wpp.png';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import { Slideshow, Slide } from '../components/Slide/slide';

const Home = () => {
    return (
        <>
            <div className="header section__padding">
                <div className="header_content">
                    <h1>Welcome Gamer!</h1>
                    <h1>Welcome Gamer!</h1>
                    <h1>Welcome Gamer!</h1>
                    <h2>Do you want to be part of the Gamming World?</h2>
                    <p>Come and join this wonderful community.</p>
                </div>
                <div className="header_image">
                    <img src={game} />
                </div>
            </div>
            <div>
                <Slideshow controles={true}>
                    <Slide>
                            <img src={img1} alt="" />
                    </Slide>
                    <Slide>
                            <img src={img2} alt="" />
                    </Slide>
                    <Slide>
                            <img src={img3} alt="" />
                    </Slide>
                </Slideshow>
            </div>
            <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=573053521012" target="_blank">
                    <img src={wpp} alt="" />
                </a>
            </div>
        </>
    );
}
export default Home; 