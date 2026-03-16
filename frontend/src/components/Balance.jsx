

export function Balance({children1,children2}) {
  return (
    <div className="w-full bg-white mt-2 p-2 rounded-md flex shadow-xl/30 inset-shadow-sm">
      <div className="font-bold mr-2">{children1}</div><div>{children2}</div>
    </div>
  )
}
