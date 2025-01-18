import React from 'react'

function Card({header, title, message, action}) {
  return (
    <div className="card ms-5 me-5 mt-3">
        {
            header ? (
                <div className="card-header">
                    {header}
                </div>
            ): null
        }
        
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <button className='btn btn-info text-light' onClick={action}>{message}</button>
        </div>
    </div>
  )
}

export default Card
