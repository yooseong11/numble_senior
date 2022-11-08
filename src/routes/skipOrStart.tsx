import { useNavigate } from 'react-router-dom'

const skipOrStart = () => {
  const navigate = useNavigate()

  const goOnboardingPage = () => {
    navigate('/onboarding/1')
  }
  const goMainPage = () => {
    navigate('/main')
  }

  return (
    <div className='py-56 text-center font-NotoSans'>
      <div className='px-4 mb-12'>
        <h2 className='text-2xl font-bold'>시니어를 위한 1분 앱 설명서</h2>
        <p>
          입장 시 한달 간 입출금 문자 서비스 무료<span>🎉</span>
        </p>
      </div>
      <div className='px-4'>
        <button
          className='p-4 bg-yellow-300 hover:bg-yellow-500 rounded-xl bloc w-full'
          onClick={goOnboardingPage}
        >
          시작하기
        </button>
        <button
          className='p-4 mt-4 bg-gray-300 hover:bg-gray-400 rounded-xl block w-full'
          onClick={goMainPage}
        >
          Skip하기
        </button>
      </div>
    </div>
  )
}

export default skipOrStart
