import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import WordComponent from './components/WordComponent';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import { fiveLetterWords } from './util/words';

function App() {

  const [letter, setLetter] = useState('');
  // const randomWord = (wordsArr) => wordsArr[Math.floor(Math.random()*wordsArr.length)]
  // const wordOfTheDay = randomWord(fiveLetterWords)
  // console.log(wordOfTheDay)

  const wordOfTheDay = "tango";

  return (
    <div className="App">
      <Header />
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
