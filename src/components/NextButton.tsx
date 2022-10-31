interface NextButtonProps {
	active?: boolean
	onClick?: () => void
}

const NextButton = ({  active = false, onClick }: NextButtonProps) => {
	
	const activeColor = active ? 'bg-yellow-300' : 'bg-gray-300'
	
	return (
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		<button onClick={active ? onClick : () => {}} className={`${activeColor} text-gray-800 font-bold pt-3 pb-6 w-full font-NotoSans`}>다음</button>
	)	
}

export default NextButton