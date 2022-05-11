import React from 'react';
import wpp from '../images/wpp.png';

const Community = () => {
    return (
        <>
            <h1>Community page</h1>
            <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=573053521012" target="_blank">
                    <img src={wpp} alt=""/>
                </a>
            </div>
        </>
    );
};
export default Community; 