import React, { useState, useEffect } from 'react';
import { Fetch } from '../components/API/fetch';
import wpp from '../images/wpp.png';
import '../styles/API.css';
import { Cards } from '../components/API/cards';
import {useNavigate} from 'react-router-dom'

const API = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const state = Fetch(url)
    const { loanding, data } = state
    loanding ? console.log('loanding') : console.log(data.results)

    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('user')){
            alert("Debe iniciar sesión para entrar a esta sección.");
            navigate('/signin', {replace: true});
        }
      });
        return (
            <>
                <div className='pokemon_container'>
                    <h1>Pokemon API</h1>
                    {
                        loanding ?
                            <h1>Loanding</h1>
                            :
                            <div>
                                <Cards results={data.results} />

                                <div className='containerAPI_buttons m-auto'>
                                    <button className='previous' onClick={() => setUrl(data.previous)}>Previous</button>
                                    <button className='next' onClick={() => setUrl(data.next)}>Next</button>
                                </div>
                            </div>
                    }
                </div>


                <div className="whatsapp" >
                    <a href="https://api.whatsapp.com/send?phone=573053521012">
                        <img src={wpp} alt="" />
                    </a>
                </div>
            </>
        );
}
export default API;

