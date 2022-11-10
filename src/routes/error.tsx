import React from 'react'
import { useRouteError } from 'react-router-dom'

const error = () => {
  const error = useRouteError() as Error

  return (
    <div className='h-screen bg-gray-350 font-NotoSans'>
      <div className='pt-24 text-center'>
        <h1 className='text-2xl'>어, 뭔가 잘못됐어요 😩</h1>
        <pre>{error.message || JSON.stringify(error)}</pre>
        <button className='text-blue-300 underline' onClick={() => (window.location.href = '/')}>
          인덱스 페이지로 돌아가기
        </button>
      </div>
    </div>
  )
}

export default error
