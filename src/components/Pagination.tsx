interface PaginationProps {
  size: number
  activeNumber?: number
}

const Pagination = ({ size, activeNumber }: PaginationProps) => {
  const pages = Array.from({ length: size }, (v, i) => i + 1)

  const ActivePageStyle = (currentPage: number) => {
    const isActiveNumber = currentPage === activeNumber
    return isActiveNumber ? 'bg-gray-400 w-[1.125rem]' : 'bg-gray-350 w-[0.375rem]'
  }

  return (
    <div className='flex p-4'>
      {pages.map((currentPage) => (
        <div
          key={currentPage}
          className={
            'rounded-full h-[0.375rem] m-[0.188rem] ' + (ActivePageStyle(currentPage))
          }
        />
      ))}
    </div>
  )
}

export default Pagination
