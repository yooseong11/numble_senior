import { Outlet } from 'react-router-dom'
import header from './image/header.png'

function App() {
  return (
    <div className='App bg-gray-400 h-screen'>
      <div className='flex justify-center items-center'>
        <div id='screen' className=' bg-white h-[760px] w-[22.5rem] px-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
