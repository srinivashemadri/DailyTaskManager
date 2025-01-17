import React from 'react'

function ErrorDisplay({message}) {
  return (
    <p className='text-danger mt-2'>{message}</p>
  )
}

export default ErrorDisplay
