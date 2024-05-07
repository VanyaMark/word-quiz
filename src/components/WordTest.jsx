import React from "react";
import { useState } from 'react';

const WordTest = () => {
    const [word, setWord] = useState([])

    const handleWord = (event) => {

    }

  return (
    <div class="center">
      <input
        onChange={handleWord}
        className="letter"
        maxLength={1}
        required
      ></input>
      <input
        className="letter"
        maxLength={1}
        required
      ></input>
      <input
        className="letter"
        maxLength={1}
        required
      ></input>
      <input
        className="letter"
        maxLength={1}
        required
      ></input>
      <input
        className="letter"
        maxLength={1}
        required
      ></input>
    </div>
  );
};

export default WordTest;
