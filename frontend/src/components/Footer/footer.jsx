import React from 'react';
import "./footer.css";
import {RiGithubFill, RiLinkedinBoxFill} from 'react-icons/ri';

const Footer = () => {
    return (
        <>
        <div className='footer_container'>
            <div className='columns_container'>
                <div className='row'>
                    <div className='column'>
                        <h2>(logo)</h2>
                        
                    </div>
                    <div className='column'>
                        <h2>About Us</h2>
                        <p>María José Peña Ruiz</p>
                        <p><a href="mailto:maria.penaruiz@upb.edu.co" target="_blank">maria.penaruiz@upb.edu.co</a></p>
                    </div>
                    <div className='column'>
                        <a className='icons' href="https://github.com/MaryJoP10"><RiGithubFill color="#fff" size={60} onMouseOver={({target})=>target.style.color="#702632"} onMouseOut={({target})=>target.style.color="#fff"}/></a> 
                        <a className='icons' href="https://www.linkedin.com/in/maryjop10"><RiLinkedinBoxFill color="#fff" size={60} onMouseOver={({target})=>target.style.color="#702632"} onMouseOut={({target})=>target.style.color="#fff"}/></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;