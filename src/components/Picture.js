import React from 'react'

const Picture = ({ link }) => {
  return (
    <div className="col m3" style={{ padding: '10px', backgroundColor: 'white' }}>
      <div className="card">
        <div className="card-image">
          <img src={link} width='200px' height='200px' />
        </div>
      </div>
    </div>
  )
}

export default Picture
