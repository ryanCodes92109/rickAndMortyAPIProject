import React, {useState, useEffect} from 'react'
import './Character.css'
import CharacterCard from './CharacterCard'
import { getCharacter } from 'rickmortyapi'

const Characters = () => {

  
  const [characters, setCharacters] = useState([]);
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
    console.log(characters)

    const mappedCharacters = characters.map((char) => (
      <CharacterCard 
        key={char.id} 
        {...char}

      />
    ));

  return (
    <div className='characterContainer'>
      {mappedCharacters}
       
    </div>
  )
}

export default Characters