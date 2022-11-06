import { Outlet, useLocation } from 'react-router-dom'
import Spinner from './components/Spinner'
import { Suspense } from 'react'
import Splash from './components/Splash'

function App() {
  const location = useLocation()
  const isIndex = location.pathname === '/'

  return (
    <div className='App h-screen overflow-y-auto bg-brown-100 '>
      <div className='flex justify-center items-center'>
        <div
          id='screen'
          className='bg-white h-screen sm:h-[46rem] w-full sm:w-[22.5rem] relative rounded-lg shadow-2xl overflow-hidden'
        >
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
          {isIndex ? <Splash /> : null}
        </div>
      </div>
    </div>
  )
}

export default App
