import React from "react";
import { useState } from 'react';

const indexArr = [0, 1, 2, 3, 4];

const WordTest = () => {
    const [word, setWord] = useState([])

    const handleWord = (event, index) => {
      const letter = event.target.value.toUpperCase();
      const newWord = [...word];
      newWord[index] = letter;
      setWord(newWord);
      console.log('word from wordTest comp: ', word)
    }

  return (
    <div class="center">
      {indexArr.map(index =>       <input
        key={index} 
        onChange={event => handleWord(event, index)}
        className="letter"
        value={word[index]}
        maxLength={1}
        required
      ></input>)}
    </div>
  );
};

export default WordTest;
