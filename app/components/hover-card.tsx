import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { link } from 'fs';

// Define the type for HoverCardTriggerProps
type HoverCardTriggerProps = {
    asChild?: boolean;
};

// Define the type for HoverCardContentProps
type HoverCardContentProps = {
    sideOffset?: number;
    imageSrc: string;
    title: string;
    username: string;
    description: string;
    following: number;
    followers: number;
    linkhref: string;
};

const HoverCardDemo: React.FC<HoverCardContentProps> = ({
    imageSrc,
    title,
    username,
    description,
    following,
    followers,
    sideOffset = 5,
    linkhref,
}) => (
    <HoverCard.Root>
        <HoverCard.Trigger asChild>
            <a
                className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
                href={linkhref}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img className="block h-[45px] w-[45px] rounded-full" src={imageSrc} alt={title} />
            </a>
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content
                className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                sideOffset={sideOffset}
            >
                <div className="flex flex-col gap-[7px]">
                    <img className="block h-[60px] w-[60px] rounded-full" src={imageSrc} alt={title} />
                    <div className="flex flex-col gap-[15px]">
                        <div>
                            <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">{title}</div>
                            <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">@{username}</div>
                        </div>
                        <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">{description}</div>
                        <div className="flex gap-[15px]">
                            <div className="flex gap-[5px]">
                                <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">{following}</div>{' '}
                                <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">Following</div>
                            </div>
                            <div className="flex gap-[5px]">
                                <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">{followers}</div>{' '}
                                <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">Followers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <HoverCard.Arrow className="fill-white" />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
);

export default HoverCardDemo;
