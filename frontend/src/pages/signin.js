import React from 'react';
import wpp from '../images/wpp.png';

const Signin = () => {
    return (
        <>
            <h1>Sign In page</h1>
            <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=573053521012" target="_blank">
                    <img src={wpp} alt=""/>
                </a>
            </div>
        </>
    )
}
export default Signin; 