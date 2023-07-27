import React, { FC } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon, HomeIcon, PlusIcon, PersonIcon, ExitIcon, EnterIcon, FileIcon } from '@radix-ui/react-icons';
import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link'

type ListItemProps = {
  href: string;
  title: string;
  Icon: FC;
};

type NaviProps = {
  user?: any
  loading: boolean
}

const NavigationMenuDemo = ({ user, loading }: NaviProps) => {
  const ListItem: FC<ListItemProps> = ({ href, title, Icon }) => (
    <li>
      <Link href={href} className="flex items-center gap-2 hover:bg-green3 px-4 py-2 rounded-lg no-underline focus:ring-2 focus:ring-green-7 outline-none">
        <Icon aria-label={title} />
        {title}
      </Link>
    </li>
  );

  return (
    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center bg-white p-4">
      <NavigationMenu.List className="flex items-center gap-4 text-lg text-green-11">
        <NavigationMenu.Item>
          <Link href="/" className="hover:bg-green3 px-4 py-2 rounded-lg no-underline focus:ring-2 focus:ring-green-7 outline-none">
            Home
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link href="/about" className="flex justify-center items-center hover:bg-green3 px-4 py-2 rounded-lg no-underline focus:ring-2 focus:ring-green-7 outline-none">
            <PlusIcon className="mr-2" aria-label="Create Plan" />
            Create Plan
          </Link>
        </NavigationMenu.Item>

        {!loading && !user && (
          <NavigationMenu.Item>
            <a href="/api/auth/login" className="flex justify-center items-center hover:bg-green3 px-4 py-2 rounded-lg no-underline focus:ring-2 focus:ring-green-7 outline-none">
              <EnterIcon className="mr-2" aria-label="Login" />
              Login
            </a>
          </NavigationMenu.Item>
        )}

        {!loading && user && (
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center gap-2 hover:bg-green3 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-7 outline-none">
              <Avatar.Root className="h-8 w-8 overflow-hidden rounded-full border-2 border-green-300">
                <Avatar.Image src={user.picture} alt={user.name} />
              </Avatar.Root>
              <CaretDownIcon className="transition-transform duration-250 ease-in" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute bg-white w-48 rounded-md shadow-lg">
              <ul className="text-sm text-green-11 px-4 py-2 leading-6">
                <ListItem title="My Profile" href="/profile" Icon={PersonIcon} />
                <ListItem title="My Plans" href="#" Icon={FileIcon} />
                <ListItem title="Logout" href="/api/auth/logout" Icon={ExitIcon} />
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuDemo;
