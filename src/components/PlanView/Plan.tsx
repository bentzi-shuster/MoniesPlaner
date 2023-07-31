import Image from "next/image"

export default function Plan({plan,onClick}) {

return(
    <div onClick={onClick}
     className="sm:max-w-sm sm:min-w-sm md:max-w-full md:min-w-full lg:max-w-full lg:min-w-full rounded overflow-hidden shadow-[0_0px_4px_1px] shadow-blackA4 bg-white border border-gray-200 cursor-pointer">
    <div className="px-6 py-4">
      <Image className="w-full" src={plan.Img} alt="Sunset in the mountains" width={900} height={600}/>
      <div className="font-bold text-xl mb-2">{plan.Name}</div>
      <p className="text-gray-700 text-base h-12 text-ellipsis overflow-hidden">
        {plan.Description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cost: ${plan.Cost}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Income ${plan.Income}</span>
    </div>
  </div>


)

}