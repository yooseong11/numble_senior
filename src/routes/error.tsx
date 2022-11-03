import React from 'react'
import { useRouteError } from 'react-router-dom'

const error = () => {
  const error = useRouteError() as Error
  return (
    <div className='h-screen bg-gray-350'>
      <div className='pt-24 text-center'>
        <h1 className='text-2xl'>Uh oh, something went terribly wrong 😩</h1>
        <pre>{error.message || JSON.stringify(error)}</pre>
        <button className='text-blue-300 underline' onClick={() => (window.location.href = '/')}>
          Click here to reload the app
        </button>
      </div>
    </div>
  )
}

export default error
