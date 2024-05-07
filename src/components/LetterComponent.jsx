import React from 'react';
import { useState } from 'react';

const LetterComponent = ({index}) => {
    const [letter, setLetter] = useState('')

    const handleLetter = (event) => {
        setLetter(event.target.value.slice(0,1))
        console.log('handleLetter: ', letter)
    }
  return (
    <input className='letter' index={index} onChange={handleLetter} value={letter.toUpperCase()} maxLength={1} required>
    </input>
  )
}

export default LetterComponent

{/* <input type="number" id="initialInvestment" name="initialInvestment" value={investmentValue.initialInvestment} onChange={handleInvestmentChange} required></input> */}

// const handleInvestmentChange = (event) => {
//     setInvestmentValue(prevInvestmentValue => {
//         return {...prevInvestmentValue,
//                 [event.target.id]: Number(event.target.value)}
//     })
//     console.log(investmentValue)
// }