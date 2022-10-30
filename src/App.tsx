import header from './image/header.png'

function App() {
  return (
    <div className='App bg-gray-400 h-screen'>
      <div className='flex justify-center items-center'>
        <div id='screen' className=' bg-white h-screen w-[22.5rem] px-4'>
          <header>
            <img src={header} alt='header' />
          </header>
          layout
        </div>
      </div>
    </div>
  )
}

export default App
