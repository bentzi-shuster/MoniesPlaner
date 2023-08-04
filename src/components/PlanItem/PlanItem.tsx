"use client"
import { plan } from "@prisma/client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OpenInNewWindowIcon } from '@radix-ui/react-icons';
import { useCallback } from 'react';

type PlanItemProps = {
    plan: plan
    // function prop for when the plan is clicked
    onClick: () => void
}
const PlanItem = ({ plan, onClick }: PlanItemProps) => {
    console.log(plan);
    const [showOverlay, setShowOverlay] = useState(true);

    // local state for showing/hiding the overlay
    const handleMouseEnter = useCallback(() => {
        setShowOverlay(false);
    }, []);

    // useCallback makes so these funcitons are not recreated on every render
    const handleMouseLeave = useCallback(() => {
        setShowOverlay(true);
    }, []);

    if (plan != undefined) {
        return (
            // Main Card Container
            <div
                className="relative w-full rounded-lg h-[308px] overflow-hidden cursor-pointer"
                onClick={onClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Main Card Background Image */}
                <Image src="https://cdn.discordapp.com/attachments/743166351891365989/1136335631535067166/IMG_9841.png" alt={plan?.title} layout="fill" objectFit="cover" objectPosition="center" />
                {/* Mobile Popout Link */}
                <Link
                    href={`/plans/` + plan.id}
                    className="absolute top-0 right-0 p-2 rounded-full bg-white bg-opacity-70 transition duration-250 ease-in-out mr-2 mt-2 border border-green-700 z-10 lg:hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <OpenInNewWindowIcon />
                </Link>

                {/* Overlay */}
                <div
                    className={`absolute bottom-4 left-4 right-4 px-4 py-3 bg-[#17B890] rounded-lg transition-opacity duration-300 ${showOverlay ? 'pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    {/* Overlay Card Title & Date*/}
                    <div className={`flex justify-between items-start mb-1 transition-opacity duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-xs font-bold text-[#FA8334]">{plan.title}</div>
                        <p className="text-xs font-medium">{plan.createdAt.toLocaleString('en-US', { month: 'short' })} {plan.createdAt.getFullYear()}</p> {/* placeholder date text */}
                    </div>
                    <p className={`text-sm transition-opacity duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>Cost: ${plan.insurance} </p>
                    <p className={`text-sm transition-opacity duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>Income: ${plan.income} </p>
                    {/* the avatar and username */}
                    <div className={`w-6 h-6 overflow-hidden bg-gray-300 rounded-full transition-opacity duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>
                        <Image src="/assets/images/avatars/c.png" alt="avatar" width={24} height={24} className="object-cover w-full h-full" />
                        <p className="font-medium">User{plan.userSub}</p> {/* placeholder username */}
                    </div>
                </div>
            </div>
        )
    } else {
        return <p>Error: No plan found</p>
    }
}

export default PlanItem;