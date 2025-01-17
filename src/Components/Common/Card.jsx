import React from 'react'

function Card({header, title, message, action}) {
  return (
    <div class="card ms-5 me-5 mt-3">
        {
            header ? (
                <div class="card-header">
                    {header}
                </div>
            ): null
        }
        
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <button className='btn btn-info text-light' onClick={action}>{message}</button>
        </div>
    </div>
  )
}

export default Card
