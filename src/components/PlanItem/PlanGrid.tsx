"use client"
import React, { useState } from "react";
import PlanItem from "./PlanItem";
import Image from 'next/image';
import { plan as PlanData } from "@prisma/client";
import ViewPlanPopup from "./ViewPlanPopup";


interface PlanGridProps {
    plans: PlanData[]; // Receive an array of plans
}
const PlanGrid: React.FC<PlanGridProps> = ({ plans }) => {
    const [activePlan, setActivePlan] = useState<PlanData | null>(null);
    const handlePlanClick = (plan: PlanData) => {
        setActivePlan(plan);
        document.body.style.overflow = 'hidden';
    };
    if (!plans) {
        return <p>Loading...</p>
    }
    if (plans.length === 0) {
        return <p>No plans available.</p>
    }
    return (
        <div className="flex flex-row items-start justify-center py-6 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-3 gap-4 m-4 flex-1 place-items-center grid-flow-row-dense justify-items-stretch">
                {plans?.map((plan) => (
                    <PlanItem
                        onClick={() => handlePlanClick(plan)}
                        key={plan.id}
                        plan={plan}
                    />
                ))}
                {activePlan && (
                    <ViewPlanPopup plan={activePlan} onClose={() => {
                        setActivePlan(null)
                        document.body.style.overflow = '';
                    }
                    } />
                )
                }
            </div>
        </div>
    )
}

export default PlanGrid;