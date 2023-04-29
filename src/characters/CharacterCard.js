import React from 'react'


const CharacterCard = ({name, status, species, image  }) => {

  return (

    <div className='characterCard'>
        <span className='characterCardDetails'>Character: <br/> {name}</span> 
        {<img 
          src={image}
          className='charPic'
        />}
        <span className='characterCardDetails'>Species: <br />{species}</span> 
        <span className='characterCardDetails'>Status: <br />{status}</span> 
       
        
    </div>
  )
}

export default CharacterCard