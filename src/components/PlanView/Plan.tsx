import Image from "next/image"
import Link from "next/link"
import { OpenInNewWindowIcon } from '@radix-ui/react-icons'
export default function Plan({plan,onClick}) {

return(
    <div onClick={onClick}
     className="sm:max-w-sm sm:min-w-sm md:max-w-full md:min-w-full lg:max-w-full lg:min-w-full overflow-hidden shadow-[0_0px_4px_1px] shadow-blackA4 bg-white border border-gray-200 cursor-pointer relative"
      style={{
        background: `url(${plan.Img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      >
        <div className="bg-white bg-opacity-60 hover:bg-opacity-0 transition duration-250 ease-in-out">

<Link href={`/plans/`+plan.id} className="absolute top-0 right-0 p-2"
 target="_blank" rel="noopener noreferrer">
  <OpenInNewWindowIcon />
</Link>
    <div className="px-6 py-4 text-center ">
      <div className="font-extrabold text-xl mb-2 text-black max-w-fit mx-auto rounded-sm px-1 border-b-2 border-b-green10 text-center 
      ">{plan.Name}</div>
      <p className="text-black text-base h-12 text-ellipsis overflow-hidden ">
        {plan.Description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2mix-blend-difference text-white">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cost: ${plan.Cost}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Income ${plan.Income}</span>
    </div>
  </div>
  </div>

)

}