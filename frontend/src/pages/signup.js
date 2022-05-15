import React, { useState } from 'react';
import wpp from '../images/wpp.png';
import '../styles/signup.css';
import COD from '../images/COD.png';

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!username || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("username", JSON.stringify(username));
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("password", JSON.stringify(password));
            alert("Successful Sign Up");
            setUsername("");
            setEmail("");
            setPassword("");
            }
    }

    return (
        <>
            <div className='signup_page'>
                <img src={COD} />
                <div className="signup_container">
                    {" "}
                        <form onSubmit={handleFormSubmit}>
                            <h1>Sign Up</h1>
                            <div className='input_signup'>
                                <div className='label'>
                                    <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} required />
                                    <label> Username</label>
                                </div>
                                <div className='label'>
                                    <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} required />
                                    <label>Email</label>
                                </div>
                                <div className='label'>
                                    <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
                                    <label>Password</label>
                                </div>
                                <button type='submit'>Sign Up</button>
                                
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