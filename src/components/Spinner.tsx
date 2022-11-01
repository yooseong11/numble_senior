const Spinner = () => {
  return (
    <button
      type='button'
      className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm  rounded-md text-white  hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2'
      disabled
    >
      <svg
        className='animate-spin -ml-1 mr-3 h-5 w-5 text-blue-300'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        ></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        ></path>
      </svg>
    </button>
  )
}

export default Spinner
