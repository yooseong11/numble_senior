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
    <div className='App h-screen overflow-y-auto bg-brown-100 '>
      <div className='flex justify-center items-center'>
        <div
          id='screen'
          className=' bg-white h-[46rem] w-[22.5rem] relative rounded-lg shadow-2xl overflow-hidden'
        >
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
          {isIndex ? (
            <div className='py-72 text-center font-NotoSans'>
              <div className='px-4 mb-12'>
                <h2 className='text-2xl font-bold'>시니어를 위한 1분 앱 설명서</h2>
                <p>
                  입장 시 한달 간 입출금 문자 서비스 무료<span>🎉</span>
                </p>
              </div>
              <div className='px-4'>
                <button
                  className='p-4 bg-yellow-300 hover:bg-yellow-500 rounded-xl bloc w-full'
                  onClick={goNextPage}
                >
                  시작하기
                </button>
                <button className='p-4 mt-4 bg-gray-300 hover:bg-gray-400 rounded-xl block w-full'>
                  Skip하기
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App
