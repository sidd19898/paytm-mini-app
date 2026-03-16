import "../App.css"


export function Bottomwarning({children,children2}) {
  return (
    <div className="flex justify-center mt-2">
      <div className="text-sm">{children}   <u>{children2}</u></div>
    </div>
  )
}
