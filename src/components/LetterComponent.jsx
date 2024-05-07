import React from 'react';
import { useState, useEffect } from 'react';

const LetterComponent = ({index}) => {
    const [letterObj, setLetterObj] = useState({index: index, letter: ''})

    const handleLetter = (event) => {
      const inputValue = event.target.value.slice(0,1).toUpperCase()
        setLetterObj({...letterObj, letter: inputValue})
        console.log('handleLetter: ', letterObj.letter)
    }

    useEffect(() => {
      console.log('letterObj: ', letterObj)
    }, [letterObj])

  return (
    <input className='letter' index={index} onChange={handleLetter} value={letterObj.letter} maxLength={1} required>
    </input>
  )
}

export default LetterComponent

