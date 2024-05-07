import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import WordComponent from './components/WordComponent';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import { fiveLetterWords } from './util/words';

import WordTest from './components/WordTest';

function App() {

  const [word, setWord] = useState('');
  // const randomWord = (wordsArr) => wordsArr[Math.floor(Math.random()*wordsArr.length)]
  // const wordOfTheDay = randomWord(fiveLetterWords)
  // console.log(wordOfTheDay)

  const wordOfTheDay = "tango";

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

      <WordTest />

      <div>
      <WordComponent />
      <WordComponent />
      <WordComponent />
      <WordComponent />
      <WordComponent />
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
