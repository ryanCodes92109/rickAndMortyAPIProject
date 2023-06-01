import React, {useState, useEffect} from 'react'
import './Character.css'
import CharacterCard from './CharacterCard'
import { getCharacter } from 'rickmortyapi'

const Characters = ({characters, setCharacters, search}) => {

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters((_characters) => {
      return [..._characters, ...data.results];
    });
    if (data.info && data.info.next) {
      fetchData(data.info.next);
    }
  };

  const searchCharacters = characters.filter(char => char.name.toLowerCase().includes(search))

  const mappedCharacters = searchCharacters.map(char => (
    <CharacterCard key={char.id} name={char.name} status={char.status} species={char.species} image={char.image} /> ))

  return (
    <div className='characterContainer'>
       {mappedCharacters}
    </div>
  )
}

export default Characters