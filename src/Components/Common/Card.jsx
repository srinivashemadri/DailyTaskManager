import React from 'react'

function Card({header, title, message}) {
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
            <p class="card-text">{message}</p>
        </div>
    </div>
  )
}

export default Card
