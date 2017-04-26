import React from 'react'

const Error = ({ msg }) => {
  return (
    <div style={{ color: 'red', textAlign: 'center', fontSize: '18px' }}>
      <br />
      { msg }
      <br />
    </div>
  )
}

export default Error
