import React from "react";

const indexArr = [0, 1, 2, 3, 4];

const WordTest = ({word, handleWord}) => {

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
