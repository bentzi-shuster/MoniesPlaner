"use client"
import React, { useState } from "react";
import Plan from "./Plan";
import Image from 'next/image';

// Define the shape of a plan
interface PlanData {
  id: string;
  Img: string;
  Name: string;
  Description: string;
  Cost: number;
  Income: number;
}

interface PlanViewProps {
  plans: PlanData[]; // Receive an array of plans
}

const PlanView: React.FC<PlanViewProps> = ({ plans }) => {
  // useState to handle currently active plan
  const [activePlan, setActivePlan] = useState<PlanData | null>(null);

  return (
    <div className="flex flex-row items-start justify-center py-6 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 m-4 flex-1 place-items-center grid-flow-row-dense justify-items-stretch">
        {plans.map((plan) => (
          <Plan 
            onClick={() => setActivePlan(plan)}
            key={plan.Name + plan.Description + plan.Cost + plan.Income}
            plan={plan}
          />
        ))}
      </div>
      <div className="flex-1 flex flex-col items-start justify-between border-2 border-dashed border-gray-300 rounded-md ml-2 mr-5 px-2 py-10 m-4 min-h-[300px] hidden lg:flex overflow-auto">
        <div className="w-full">
          {activePlan ? (
            <div className="h-full border-2 border-gray-200 p-4 flex flex-col justify-between">
              <h1 className="text-xl font-bold mb-2">{activePlan.Name}</h1>
              <div className="w-full mb-4">
                <Image src={activePlan.Img} alt={activePlan.Name} width={500} height={300} objectFit="contain" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm font-bold">Description:</div>
                <div className="text-sm">{activePlan.Description}</div>
                <div className="text-sm font-bold">Cost:</div>
                <div className="text-sm">${activePlan.Cost}</div>
                <div className="text-sm font-bold">Income:</div>
                <div className="text-sm">${activePlan.Income}</div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold">View Plan</h1>
              <p className="text-sm text-gray-500">Select a plan to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanView;