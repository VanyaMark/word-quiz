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

  const checkWordToWordOfTheDay = (word, wordOfTheDay) => {
    // let wordOfTheDayArr = wordOfTheDay.split()
    const wordToString = JSON.stringify(word)
    console.log('from checkWord: ', wordToString)
    if (wordOfTheDay === wordToString) {
      console.log(true)
      return true
    } else {
      console.log(false)
      return false
    }
  }

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

      <WordTest  word={word} handleWord={handleWord} check={checkWordToWordOfTheDay} />

      <div>
      <WordComponent />
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
