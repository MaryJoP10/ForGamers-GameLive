import React from 'react';
import wpp from '../images/wpp.png';
import '../styles/chat.css'

const Chat = () => {
    return (
        <>
        <div className='chat_container'>
            <h1>Chat page</h1>
        </div>
            <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=573053521012">
                    <img src={wpp} alt=""/>
                </a>
            </div>
        </>
    )
}
export default Chat; 