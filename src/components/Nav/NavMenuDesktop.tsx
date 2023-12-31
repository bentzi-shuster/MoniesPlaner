"use client"
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';

type NavMenuProps = {
  navs: {
    Name: string,
    Link: string,
    Auth: boolean | null,
    Description: string
  }[],
  isLoggedIn: boolean
}

const NavMenuDesktop: React.FC<NavMenuProps> = ({ navs, isLoggedIn }) => {

  let [linkpath,setLinkPath] = React.useState("/");
  return (
  <Tabs.Root
    className="flex flex-col w-[100%]"
    defaultValue="/"
    
  >
    <Tabs.List className="shrink-0 flex" aria-label="Nav Bar">
      {navs.map((nav,index)=>{
        if(nav.Auth!==null){
        if(nav.Auth && !isLoggedIn){
          return null;
        }
        if(!nav.Auth && isLoggedIn){
          return null;
        }
      }
        return (
        <Tabs.Trigger

         data-state={linkpath===nav.Link?"active":"inactive"}
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none  hover:text-green-900 data-[state=active]:text-[#0D9488] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value={nav.Link}
          key={index}
        >
          <Link   onClick={(e)=>{
          setLinkPath(nav.Link);
        }} href={nav.Link} className="w-full h-full flex items-center justify-center" title={nav.Description}>
          {nav.Name}
            </Link>
        </Tabs.Trigger>
        )
      })}
    </Tabs.List>
    
  </Tabs.Root>
)}


export default NavMenuDesktop;
