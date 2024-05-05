import React from 'react'
import { letterGroup1, letterGroup2, letterGroup3 } from '../util/words';
import LetterGroup from './LetterGroup';


const Keyboard = () => {
  return (
    <div className="center" id="keyboard" >

        <LetterGroup letterGroup={letterGroup1}/>
        <LetterGroup letterGroup={letterGroup2}/>
        <LetterGroup letterGroup={letterGroup3}/>

    </div>
  )
}

export default Keyboard

