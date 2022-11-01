interface crossButtonProps {
  onClick?: () => void
}

const CrossButton = ({ onClick }: crossButtonProps) => {
  return (
    <svg
			onClick={onClick}
			className="cursor-pointer"
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 5L18.5 18.5M18.5 5L5 18.5'
        stroke='#8D939D'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default CrossButton
