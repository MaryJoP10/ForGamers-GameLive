import React from 'react';
import wpp from '../images/wpp.png';
import '../styles/library.css'

const Library = () => {
    return (
        <>
            <div className='container_library'>

            </div>
            <h1>Library page</h1>
            <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=573053521012">
                    <img src={wpp} alt=""/>
                </a>
            </div>
        </>
    )
}
export default Library; 