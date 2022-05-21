import React, { useState } from 'react';
import wpp from '../images/wpp.png';
import crash from '../images/crash.png';
import '../styles/signin.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const [userlog, setUserlog] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/api/users/signin', userlog)
          .then(function (response) {
            if(response.data.valid){
                alert("Successful Sign Up");
                navigate('/', {replace: true});
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    return (
        <>
            <div className='signin_page'>
                <img src={crash} className="img-fluid" alt="crash"/>
                <div className="signin_container" >
                        <form onSubmit={handleLogin}>
                            <h1>Sign In</h1>
                            <div className='input_signin'>
                                <div className='label'>
                                    <input type='text' value={userlog.username} onChange={(e) => setUserlog({ ...userlog, username: e.target.value })} required />
                                    <label> Username</label>
                                </div>
                                <div className='label'>
                                    <input type='password' value={userlog.password} onChange={(e) => setUserlog({ ...userlog, password: e.target.value })} required />
                                    <label>Password</label>
                                </div>
                                <button type='submit'>Sign In</button>
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
export default Signin; 