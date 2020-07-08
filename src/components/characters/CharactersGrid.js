import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../Spinner'

const CharactersGrid = ({ items, loading }) => {
    return loading ? (
        <Spinner />
    ) 
    : (
        <section className='cards'>
                    {items.map( item =>(
                        <CharacterItem item={item}></CharacterItem>
                    ))}
            </section>
        )
}

export default CharactersGrid
