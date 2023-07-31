"use client"
import { useState } from "react";
import Plan from "./Plan";
export default function PlanView({plans}) {
 let [activePlan, setActivePlan] = useState(null);
return (<div className="flex flex-row items-center justify-center py-6 gap-4">
  {/* make the rows have the same height */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 m-4 flex-1 place-items-center grid-flow-row-dense">
    {plans.map((plan) => (
<Plan 
onClick={()=>setActivePlan(plan)}
key={plan.Name+plan.Description+plan.Cost+plan.Income}
plan={plan}/>
    ))}
    </div>
    <div className="flex-1 flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md ml-2 mr-5 px-2 py-10 m-4 min-h-[300px] hidden lg:flex">
      <div className="flex flex-col items-center justify-center">
        {activePlan?(
          <h1>{activePlan.Name}</h1>
          
        ):(
          <>
        <h1 className="text-2xl font-bold">View Plan</h1>
        <p className="text-sm text-gray-500">Select a plan to view</p>
        </>
        )
        }
        </div>
        </div>
        
    </div>
)
}