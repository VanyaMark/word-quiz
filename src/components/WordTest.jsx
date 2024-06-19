import React from "react";
import "./WordTest.css";

const indexArr = [0, 1, 2, 3, 4];

const WordTest = ({userGuess, handleWord, check, targetWord}) => {
  const {correctPosition, incorrectPosition, notIncluded} = check(userGuess, targetWord);

  const getLetterStyle = index => {
    //check if the guess letter is in correct, incorrect position or not included
    if (correctPosition.some(item => item.position === index)) {
      return "correct";
    } else if (incorrectPosition.some(item => item.position === index)) {
      return "incorrect";
    } else if (notIncluded.some(item => item.position === index)) {
      return "not-included";
    } else {
      return "initial";
    }
  }

  return (
    <div className="center">
      {indexArr.map(index =>       <input
        key={index} 
        onChange={event => handleWord(event, index)}
        className={`letter ${getLetterStyle(index)}`}
        value={userGuess[index] || ''} // Ensure value is empty string if undefined
        maxLength={1}
        required
      ></input>)}
      <button onClick={()=> check(userGuess, targetWord)} >Check</button> 
    </div>
  );
};

export default WordTest;
