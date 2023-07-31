"use client"
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
    import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
    import {
      HamburgerMenuIcon,
      DotFilledIcon,
      CheckIcon,
      ChevronRightIcon,
    } from '@radix-ui/react-icons';
const NavMenuMobile = ({navs, isLoggedIn}) => {
    
      return (
        <DropdownMenu.Root >
          <DropdownMenu.Trigger asChild>
            <button
              className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-emerald-800 bg-white outline-none hover:bg-green-50 focus:shadow-[0_0_0_2px] focus:shadow-black"
              aria-label="Open Menu"
            >
              <HamburgerMenuIcon />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
            >
              {navs.map((nav,index)=>{
               if(nav.Auth!==null){
                if(nav.Auth && !isLoggedIn){
                  return null;
                }
                if(!nav.Auth && isLoggedIn){
                  return null;
                }
              }
              return(
              <DropdownMenu.Item className="group text-[13px] leading-none text-emerald-800 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-emerald-500 data-[highlighted]:text-green-50"
              key={index}>
                <Link title={nav.Description} href={nav.Link} className="w-full h-full flex items-center justify-center">
                {nav.Name}
                  </Link>
              </DropdownMenu.Item>)
})}
              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

    
)}


export default NavMenuMobile;
