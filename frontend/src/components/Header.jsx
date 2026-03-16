import "../App.css"

export function Header({children}) {
  return (
    <div className='text-4xl text-center font-bold font-sans'>
      {children}
    </div>
  )
}
