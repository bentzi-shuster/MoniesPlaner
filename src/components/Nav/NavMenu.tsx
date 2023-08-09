"use client"
import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
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

    const handleResize = (e: Event) => {
      mobileref.current = isMobile((e.target as Window).innerWidth);
      setMobile(mobileref.current);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let isLoggedIn = !!user?.user?.name; // Convert to boolean

  let navs = [
    { Name: (isLoggedIn ? "All Plans" : "Home"), Link: (isLoggedIn ? "/allplans" : "/"), Auth: null, Description: (isLoggedIn ? "Browse my plans" : "Home Page") },
    { Name: "My Plans", Link: "/plans", Auth: true, Description: "Browse my plans" },
    { Name: "Account", Link: "/account", Auth: true, Description: "Manage my account" },
    { Name: "Logout", Link: "/api/auth/logout", Auth: true, Description: "Logout of my account" },
    { Name: "Login", Link: "/api/auth/login", Auth: false, Description: "Login to my account" },
  ];

  return (
    <>
      {mobile ? <NavMenuMobile navs={navs} isLoggedIn={isLoggedIn} /> : <NavMenuDesktop navs={navs} isLoggedIn={isLoggedIn} />}
    </>
  );
}

export default NavMenu;
