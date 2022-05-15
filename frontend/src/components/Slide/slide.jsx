import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './slide.css';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };
  
  const Carousel = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <img src={img1} />
          </div>
          <div className="each-slide">
            <img src={img2} />
          </div>
          <div className="each-slide">
            <img src={img3} />
          </div>
        </Slide>
      </div>
    );
  };
  
  export default Carousel;