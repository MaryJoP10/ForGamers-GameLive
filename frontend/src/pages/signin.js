import React from 'react';
import wpp from '../images/wpp.png';
import crash from '../images/crash.png';
import '../styles/signin.css';

const Signin = () => {
    return (
        <>
            <div className='signin_page'>
                <img src={crash}/>
                <div className="signin_container">
                    <form>
                        <h1>Sign In</h1>
                        <div className='input_signin'>
                            <div className='label'>
                                <input type='text'required/>
                                <label> Username</label>
                            </div>
                            <div className='label'>
                                <input type='password' required/>
                                <label>Password</label>
                                <button type='submit'>Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=573053521012" target="_blank">
                    <img src={wpp} alt=""/>
                </a>
            </div>
        </>
    )
}
export default Signin; 