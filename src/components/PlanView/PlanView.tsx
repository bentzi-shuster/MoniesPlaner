

export default function PlanView({plans}) {
return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 max-w-7xl">
    {plans.map((plan) => (
      <div className="max-w-sm rounded overflow-hidden shadow-[0_0px_4px_1px] shadow-blackA4 bg-white border border-gray-200"
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
)
}