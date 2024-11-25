

export const Keys = ({label,keyClass,onButtonClick}) => {

    const equalClass = "col-[span_2] font-semibold hover:bg-green-600"

  return (
    <div className={`bg-gray-700 flex cursor-pointer items-center justify-center p-4 rounded-md hover:bg-lime-400 ${keyClass && equalClass}`} onClick={()=>onButtonClick(label)}>{label}</div>
  )
}
