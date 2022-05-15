import React from 'react';
import '../styles/home.css';
import game from '../images/gameover.png';
import wpp from '../images/wpp.png';
import Slider from "../components/Slide/slide";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";


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
            </div >
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
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