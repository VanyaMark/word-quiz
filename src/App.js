import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import WordComponent from './components/WordComponent';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import { fiveLetterWords } from './util/words';

import WordTest from './components/WordTest';

function App() {

  const [word, setWord] = useState([]);

  const handleWord = (event, index) => {
    const letter = event.target.value.toUpperCase();
    const newWord = [...word];
    newWord[index] = letter;
    setWord(newWord);
    console.log('word from wordTest comp: ', word)
    // console.log(checkWordToWordOfTheDay(word, wordOfTheDay))
  }

  
  useEffect(() => {
    console.log('word from useEffect: ', word)
  }, [word])
  // const randomWord = (wordsArr) => wordsArr[Math.floor(Math.random()*wordsArr.length)]
  // const wordOfTheDay = randomWord(fiveLetterWords)
  // console.log(wordOfTheDay)

  const wordOfTheDay = "TANGO";
  //Compares user suggestion to word of the day and returns object containing the letters that are in both word and if the position is correct or not
  function compareWords(userGuess, targetWord) {
    const result = {
        correctPosition: [],
        incorrectPosition: [],
        notIncluded: []
    };

    console.log('userGuess: ', userGuess);
    console.log('targetWord: ', targetWord);

    // Convert strings to arrays for easier manipulation
   
    const targetArr = targetWord.split('');

    // Loop through each letter in the user's guess
    for (let i = 0; i < userGuess.length; i++) {
        const userGuessLetter = userGuess[i];
        const targetLetter = targetArr[i];

        if (userGuessLetter === targetLetter) {
            // Letter is correct both in letter and position
            result.correctPosition.push({ letter: userGuessLetter, position: i });
        } else if (targetArr.includes(userGuessLetter)) {
            // Letter is correct letter but in wrong position
            result.incorrectPosition.push({ letter: userGuessLetter, position: i });
        } else {
            // Letter is not in the target word
            result.notIncluded.push({ letter: userGuessLetter, position: i });
        }
    }

    console.log(result);
    return result;
}

  // const arrToString = (array) => {
  //   return array.join('')
  // }

  // const checkWordToWordOfTheDay = (word, wordOfTheDay) => {
  //   // let wordOfTheDayArr = wordOfTheDay.split()
  //   const wordToString = arrToString(word)
  //   console.log('from checkWord: ', wordToString)
  //   if (wordOfTheDay === wordToString) {
  //     console.log(true)
  //     return true
  //   } else {
  //    return compareLetterToLetter(word, wordOfTheDay)
  //   }
  // }

//   const handleWordInput = (event) => {
//     setWord(prevWord => {
//         return {...prevWord,
//                 [event.target.id]: Number(event.target.value)}
//     })
//     console.log(investmentValue)
// }

  return (
    <div className="App">
      <Header />

      <WordTest  userGuess={word} handleWord={handleWord} check={compareWords} targetWord={wordOfTheDay} />

      <div>
      <WordComponent />
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
