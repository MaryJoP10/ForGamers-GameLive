import React from 'react';
import wpp from '../images/wpp.png';
import '../styles/signup.css';
import COD from '../images/COD.png';

const Signup = () => {
    return (
        <>
            <div className='signup_page'>
                <img src={COD}/>
                <div className="signup_container">
                    <form>
                        <h1>Sign Up</h1>
                        <div className='input_signup'>
                            <div className='label'>
                                <input type='text'required/>
                                <label> Username</label>
                            </div>
                            <div className='label'>
                                <input type='email' required/>
                                <label>Email</label>
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
                    <img src={wpp} alt="" />
                </a>
            </div>
        </>
    )
}
export default Signup; 