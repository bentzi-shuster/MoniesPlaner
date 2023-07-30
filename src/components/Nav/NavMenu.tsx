"use client"
import React, { useEffect } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { isMobile } from "./mobileRegex"
import NavMenuDesktop from './NavMenuDesktop';
import NavMenuMobile from './NavMenuMobile';

const NavMenu = () => {
let user = useUser();
let mobileref = React.useRef(false);
let [mobile, setMobile] = React.useState(false);
useEffect(() => {
   mobileref.current = isMobile(window.innerWidth);
    setMobile(mobileref.current);
   window.addEventListener("resize", (e) => {
        mobileref.current = isMobile(e.target?.innerWidth);
        setMobile(mobileref.current);
   });




}, []);        
let isLoggedIn = user && user.user && user.user["name"];
let navs = [
  {Name:"All Plans",Link:"/",Auth:null, Description:"Browse all plans"},
  {Name:"My Plans",Link:"/plans",Auth:true, Description:"Browse my plans"},
  {Name:"Account",Link:"/account",Auth:true, Description:"Manage my account"},
  {Name:"Logout",Link:"/api/auth/logout",Auth:true, Description:"Logout of my account"},
  {Name:"Login",Link:"/api/auth/login",Auth:false, Description:"Login to my account"},
 
];
  return (
    <>
    {mobile ? <NavMenuMobile navs={navs} isLoggedIn={isLoggedIn} /> : <NavMenuDesktop navs={navs} isLoggedIn={isLoggedIn} />}
    </>
    );
    }


export default NavMenu;
