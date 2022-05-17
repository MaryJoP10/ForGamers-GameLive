import React from 'react'
import {CardPokemon} from './CardPokemon';
import './cards.css'

export const Cards = ({results}) => {
    return(
        <div className='randomcard_container'>
            <ul className='cards'>
                {
                    results.map(p=>(
                        <li className='card_item' key={p.name}>
                            <CardPokemon url={p.url}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}