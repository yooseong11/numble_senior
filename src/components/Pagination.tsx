interface PaginationProps {
  size: number
  activeNumber?: number
}

const Pagination = ({ size, activeNumber }: PaginationProps) => {
	const newArray = Array.from({ length: size }, (v, i) => i + 1)

	const active = activeNumber ? 'bg-gray-400 w-4' : 'bg-gray-350 w-2';
	console.log(newArray)
	return (
		<div className='flex'>
			{newArray.map((item, index) => (
				(item !== activeNumber)?
				<div key={index} className='rounded-full h-[0.375rem] m-[0.188rem] bg-gray-350 w-[0.375rem]' />
				:<div key={index} className='rounded-full h-[0.375rem] m-[0.188rem] bg-gray-400 w-[1.125rem]' />
			))}
    </div>
  )
}

export default Pagination
