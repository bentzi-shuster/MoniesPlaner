"use client"
import { plan } from "@prisma/client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OpenInNewWindowIcon } from '@radix-ui/react-icons';
import { useCallback } from 'react';
import getPlanCost from "../../../src/lib/getPlanCost";

type PlanItemProps = {
    plan: plan
    // function prop for when the plan is clicked
    onClick: () => void
}
const PlanItem = ({ plan, onClick }: PlanItemProps) => {
    // console.log(plan);
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
                className={` relative w-full rounded-lg h-[308px] overflow-hidden duration-200 transition-transform cursor-pointer ${showOverlay ? '' : 'scale-105 shadow-[-5px_5px_15px_0px_rgb(0,0,0,0.2)]'
            } `}
                onClick={onClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Main Card Background Image */}
                <Image src="https://cdn.discordapp.com/attachments/1126624768704118834/1137866664327782571/47920001.png" alt={plan?.title} layout="fill" objectFit="cover" objectPosition="center" />
                {/* Overlay Wrapper */}
                <div className="plancard w-full absolute bottom-0 left-0 right-0 min-h-[50%] flex items-center">

                
                {/* Overlay */}
                <div
                    className={`border-2 border-stone-200 m-2 p-2 h-full overlay
                    max-w-[calc(100%-1rem)] flex-1 bg-[rgba(249,250,251,0.8)] backdrop-blur-[5px] rounded-lg transition-transform shadow-2xl duration-[400ms] ${showOverlay ? '' : 'translate-y-[133%] '
                        }`}
                >
<div className="flex justify-between items-center mb-2 flex-row ">
                    {/* Overlay Card Title & Date*/}
                    <div className={` max-w-[80%] flex justify-between items-start mb-1 transition-opacity duration-1000 ease-out`}>
                        <div className="text-md font-semibold text-black overflow-ellipsis overflow-hidden whitespace-nowrap 
                        ">{plan.title}</div>

                    </div>

                    {/* the avatar and username */}
                    <div className={`w-6 h-6 overflow-hidden rounded-full transition-opacity duration-300 border-[1px] border-blackA4`}
                    style={{
                        background: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
                }}
                    >
                        {/*@ts-ignore placeholder avatar untill we have the url in the DB */}
                        {plan.pfp_url?<Image src={plan.pfp_url} alt={plan.display_name} width={24} height={24} className="object-cover w-full h-full min-w-[24px] min-h-[24px]" />:<p className="font-semibold font-sans flex items-center text-black bg-[#ffffff69] w-full h-full justify-center leading-tight">{plan.display_name.charAt(0)}</p>}
                    </div> 
                    </div>

<div className="flex flex-row flex-wrap justify-start items-center">
     <p className={`text-xs transition-opacity duration-300 bg-[#FA8334] w-fit m-2 py-1 px-2 rounded-full text-white font-semibold shadow-inner `}>Cost: ${getPlanCost(plan)} </p>
                    <p className={`text-xs transition-opacity duration-300 bg-[#73ceb4] w-fit m-2 py-1 px-2 rounded-full text-black font-semibold shadow-inner ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>Income: ${Math.floor(plan.income?plan.income:0)}</p>

</div>
                   

                    <p className="text-xs font-medium absolute bottom-1 right-1">{plan.created_at.toLocaleString('en-US', { month: 'short' })} {plan.created_at.getFullYear()}</p> {/* placeholder date text */}


                </div>
                
                </div>
            </div>
        )
    } else {
        return <p>Error: No plan found</p>
    }
}

export default PlanItem;