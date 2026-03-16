import "../App.css"

export function Button({children,onClick}) {
  return (
    <div className="flex justify-center">
      <button onClick={onClick} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-md mt-2'>{children}</button>
    </div>
  )
}
