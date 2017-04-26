import React from 'react'
import Picture from './Picture'
import SubmitForm from './SubmitForm'


const Round = ({ pictures, answer, round, nextRound, error, clear }) => {
  const checkAnswer = (value, answer) => {
    if (value === answer) {
      clear()
      nextRound()
    } else {
      error('Wrong answer!')
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>ROUND { round }</h2>
      <br />
      <div className="row">
      { pictures.map(pictureLink => <Picture link={pictureLink} />) }
      </div>
      <br />
      <SubmitForm checkAnswer={values => checkAnswer(values.answer, answer)} />
    </div>
  )
}

export default Round
