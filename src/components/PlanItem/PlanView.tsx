"use client"
import React, { useState } from "react";
import PlanItem from "./PlanItem";
import Image from 'next/image';
import { Plan as PlanData } from "@prisma/client";


interface PlanViewProps {
    plans: PlanData[]; // Receive an array of plans
}
const PlanView: React.FC<PlanViewProps> = ({ plans }) => {
    // useState to handle currently active plan
    const [activePlan, setActivePlan] = useState<PlanData | null>(null);
    const handlePlanClick = (plan: PlanData) => {
        setActivePlan(plan);
    };
    if (!plans) {
        return <p>Loading...</p>
    }
    if (plans.length === 0) {
        return <p>No plans available.</p>
    }
    return (
        <div className="flex flex-row items-start justify-center py-6 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 m-4 flex-1 place-items-center grid-flow-row-dense justify-items-stretch">
                {plans?.map((plan) => (
                    <PlanItem
                        onClick={() => handlePlanClick(plan)}
                        key={plan.id}
                        plan={plan}
                    />
                ))}
            </div>
            <div className="flex-1 flex flex-col items-start justify-between border-2 border-dashed border-gray-300 rounded-md ml-2 mr-5 px-2 py-10 m-4 min-h-[300px] hidden lg:flex overflow-auto">
                <div className="w-full">
                    {activePlan ? (
                        <div className="h-full border-2 border-gray-200 p-4 flex flex-col justify-between">
                            <h1 className="text-xl font-bold mb-2">{activePlan.title}</h1>
                            <div className="w-full mb-4">
                                <Image src="https://cdn.discordapp.com/attachments/743166351891365989/1136335631535067166/IMG_9841.png" alt={activePlan.title} width={500} height={300} objectFit="contain" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-sm font-bold">Rent:</div>
                                <div className="text-sm">{activePlan.rent}</div>
                                <div className="text-sm font-bold">Insurance:</div>
                                <div className="text-sm">${activePlan.insurance}</div>
                                <div className="text-sm font-bold">Income:</div>
                                <div className="text-sm">${activePlan.income}</div>
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
    )
}

export default PlanView;