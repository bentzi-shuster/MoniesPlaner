import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link'
// Define the type for the props of the ListItem component
type ListItemProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

type NaviProps = {
  user?: any
  loading: boolean
}

const NavigationMenuDemo = ({ user, loading }: NaviProps) => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
      <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
        <NavigationMenu.Item>
          <Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="/"
          >
            Home
          </Link>
        </NavigationMenu.Item>

        {/* Add the useMenuContext hook to the NavigationMenu.Content component */}
        <NavigationMenu.Item>
          <Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            About
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="/profile"
          >
            Profile
          </Link>
        </NavigationMenu.Item>
        
      {
        !loading && !user && (
          <NavigationMenu.Item>
            <a
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/api/auth/login"
            >
              Login
            </a>
          </NavigationMenu.Item>
        )
      }


        <NavigationMenu.Item>
          <a
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="/api/auth/logout"
          >
            Logout
          </a>
        </NavigationMenu.Item>
        
        
        <NavigationMenu.Indicator
          className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]"
        >
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport
          className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"
        />
      </div>
    </NavigationMenu.Root>
  );
};

// Define the ListItem component
const ListItem: React.ForwardRefRenderFunction<HTMLLIElement, ListItemProps> = (
  { children, title, ...props },
  forwardedRef
) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'
        )}
        {...props}
        ref={forwardedRef as React.ForwardedRef<HTMLAnchorElement>} // Assign the correct ref type
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
);

export default NavigationMenuDemo;
