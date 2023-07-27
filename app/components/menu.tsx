import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { PlusIcon, CaretDownIcon } from '@radix-ui/react-icons';
import * as Avatar from '@radix-ui/react-avatar';
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
      <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none p-1">
        <NavigationMenu.Item>
          <Link
            className="text-green11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="/"
          >
            Home
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link
            className="text-green11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="/about"
          >
            Create Plan <PlusIcon className="inline text-green10 relative"
              aria-hidden />
          </Link>
        </NavigationMenu.Item>
        {!loading && !user && (
          <NavigationMenu.Item>
            <a
              className="text-green11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/api/auth/login"
            >
              Login
            </a>
          </NavigationMenu.Item>
        )}
        {!loading && user && (
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-green11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              <Avatar.Root className="bg-blackA3 inline-flex h-[20px] w-[20px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                <Avatar.Image src={user.picture} alt={user.name} />
                <Avatar.Fallback />
              </Avatar.Root>{' '}
              <CaretDownIcon
                className="text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="min-w-[220px] rounded-md p-[5px] bg-green3 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
              <ul className="text-sm text-green11 pl-[20px] leading-[25px] text-mauve11">
                <ListItem title="My Profile" href="/profile">
                </ListItem>
                <ListItem title="My Plans" href="#">
                </ListItem>
                <ListItem title="Logout" href="/api/auth/logout">
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        )}
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
const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>((props, ref) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'focus:shadow-[0_0_0_2px] focus:shadow-green7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'
        )}
        {...props}
        ref={ref}
      >
        <div className="text-green12 mb-[5px] font-medium leading-[1.2]">{props.title}</div>
        <p className="text-mauve11 leading-[1.4]">{props.children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default NavigationMenuDemo;
