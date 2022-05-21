import React, { useState } from 'react';
import wpp from '../images/wpp.png';
import '../styles/signup.css';
import COD from '../images/COD.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Signup() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/api/users/signup', user)
          .then(function (response) {
            if(response.data.valid){
                localStorage.setItem("user", JSON.stringify(user));
                alert("Successful Sign Up");
                navigate('/signin', {replace: true});
            }
          });
    };

    return (
        <>
            <div className='signup_page'>
                <img src={COD} alt="COD"/>
                <div className="signup_container">
                    {" "}
                        <form onSubmit={handleFormSubmit}>
                            <h1>Sign Up</h1>
                            <div className='input_signup'>
                                <div className='label'>
                                    <input type='text' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} required />
                                    <label> Username</label>
                                </div>
                                <div className='label'>
                                    <input type='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                                    <label>Email</label>
                                </div>
                                <div className='label'>
                                    <input type='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                                    <label>Password</label>
                                </div>
                                <button type='submit'>Sign Up</button>
                                
                            </div>
                        </form>
                </div>
            </div>

            <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=573053521012">
                    <img src={wpp} alt="" />
                </a>
            </div>
        </>
    )
}
export default Signup; 