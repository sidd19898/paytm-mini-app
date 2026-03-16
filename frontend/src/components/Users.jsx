

export  function Users({children1,children3,children4}) {
  return (
    <div className="w-full bg-white mt-2 p-2 rounded-md shadow-xl/30 inset-shadow-sm">
      
      <div className="font-bold mb-2 text-xl">{children1}</div>
      <div><input type="text" id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body "/></div>

      <div className="flex justify-between items-center m-5 rounded-md inset-shadow-sm shadow-xl/60 p-2">
      
      <div className="flex items-center ml-5 ">

      <div><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      </div>

      <div className="ml-2">{children3}</div>

      </div>
      
      
      <div className="mr-5"><button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-fit mt-2'>{children4}</button></div>
      </div>

    </div>
  )
}
