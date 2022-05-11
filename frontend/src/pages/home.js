import React from 'react';
import '../styles/home.css';
import game from '../images/gameover.png';
import {RiArrowDropDownLine} from 'react-icons/ri';

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
        </>
    );
}
export default Home; 