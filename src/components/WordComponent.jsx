import React from 'react'
import LetterComponent from './LetterComponent'

const WordComponent = () => {
  return (
    <div className="center">
        <LetterComponent index={0} />
        <LetterComponent index={1} />
        <LetterComponent index={2} />
        <LetterComponent index={3} />
        <LetterComponent index={4} />
    </div>
  )
}

export default WordComponent