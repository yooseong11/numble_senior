import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Spinner from './components/Spinner'
import { Suspense } from 'react'
function App() {
  const location = useLocation()
  const isIndex = location.pathname === '/'
  const navigate = useNavigate()

  const goNextPage = () => {
    navigate('/splash')
  }

  return (
    <div className='App h-screen bg-brown-100 '>
      <div className='flex justify-center items-center'>
        <div id='screen' className=' bg-white h-[760px] w-[22.5rem] relative rounded-lg shadow-2xl overflow-hidden'>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
          {isIndex ? (
            <div className='pt-72 text-center font-NotoSans'>
              <button className='p-5 bg-yellow-300 rounded-xl' onClick={goNextPage}>
                넘블 2팀 온보딩 페이지 시작하기
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App
