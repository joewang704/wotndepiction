import React from 'react'
import { Field, reduxForm } from 'redux-form';

const SubmitForm = ({ handleSubmit, checkAnswer }) => {
  return (
    <div className="row">
      <div className="col m6 offset-m3">
        <form onSubmit={handleSubmit(checkAnswer)}>
          wot in <Field component="input" type="text" className="form-control" name="answer" placeholder="tarnation"/>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'answer',
})(SubmitForm)
