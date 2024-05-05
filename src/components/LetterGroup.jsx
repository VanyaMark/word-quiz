import React from 'react'

const LetterGroup = ({letterGroup}) => {
  return (
    <ul className="key-group">
    {letterGroup.map(letter => (
<li key={letter} className="letter" key={letter}>{letter}</li>
))}
    </ul>
  )
}

export default LetterGroup