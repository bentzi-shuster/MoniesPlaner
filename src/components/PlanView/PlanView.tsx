

export default function PlanView({plans}) {
return (<div className="flex flex-row items-center justify-center py-6 gap-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 m-4 flex-1 place-items-center ">
    {plans.map((plan) => (
      <div className="sm:max-w-sm sm:min-w-sm md:max-w-full md:min-w-full lg:max-w-full lg:min-w-full h-52 rounded overflow-hidden shadow-[0_0px_4px_1px] shadow-blackA4 bg-white border border-gray-200 cursor-pointer"
      key={plan.Name}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{plan.Name}</div>
        <p className="text-gray-700 text-base">
          {plan.Description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cost: ${plan.Cost}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Income ${plan.Income}</span>
      </div>
    </div>
    ))}
    </div>
    <div className="flex-1 flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md ml-2 mr-5 px-2 py-10 m-4 min-h-[300px] hidden lg:flex">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">View Plan</h1>
        <p className="text-sm text-gray-500">Select a plan to view</p>
        </div>
        </div>
        
    </div>
)
}