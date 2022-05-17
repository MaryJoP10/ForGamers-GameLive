import React from 'react'
import {Fetch} from './fetch'
import './cards.css'

export const CardPokemon = ({url}) => {
    const state = Fetch(url)
    const {loanding, data} = state

    return(
        <div className='card_container'>
            {
                loanding?
                <h1>Loanding</h1>
                :
                <div className='card' style={{width: '14rem'}}>
                    <div className='card_header'>
                        <h5 className='card_title'>{data.id}</h5>
                    </div>
                    <div className='card_body'>
                        <img src={data.sprites.front_default} alt='pokemon'/>
                    </div>
                    <div className='card_footer'>
                        <p className='card_text'>{data.forms[0].name}</p>
                    </div>
                </div>
            }
        </div>
    )
}