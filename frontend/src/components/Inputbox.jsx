import '../App.css'

export function Inputbox({children1, onChange}) {
  return (
    <div className='mb-3'>
      <div>{children1}</div>
      <div><input onChange={onChange} type="text" id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body "/></div>
    </div>
  )
}
