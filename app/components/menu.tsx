import React, { FC, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon, HomeIcon, PlusIcon, PersonIcon, ExitIcon, EnterIcon, FileIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
type ListItemProps = {
  href: string;
  title: string;
  Icon: FC;
};

type NaviProps = {
  user?: any;
  loading: boolean;
  onOpenChange?: () => void;
};

const NavigationMenuDemo = ({ user, loading }: NaviProps) => {
  const ListItem: FC<ListItemProps> = ({ href, title, Icon }) => (
    <li>
      <Link href={href} className="flex items-center gap-2 hover:bg-green3 px-4 py-2 rounded-lg no-underline focus:ring-2 focus:ring-green-7 outline-none">
        <Icon aria-label={title} />
        {title}
      </Link>
    </li>
  );

  const [isCaretRotated, setCaretRotation] = useState(false);
  const [isContentOpen, setContentOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleTriggerHover = (isHovering: boolean) => {
    if (!isContentOpen) {
      setCaretRotation(isHovering);
    }
  };
const handleDialogOpen = () => {
  setDialogOpen(true);
  console.log('handleDialogOpen');
};
  const handleDialogClose = () => setDialogOpen(false);

  return (

    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center bg-white p-4">
      <NavigationMenu.List className="flex items-center gap-4 text-lg text-green-11">
        <NavigationMenu.Item>
          <Link href="/" className="flex justify-center items-center hover:bg-green3 px-4 py-2 rounded-lg no-underline focus:ring-2 focus:ring-green-7 outline-none">
            <HomeIcon className="mr-2" aria-label="Home" />
            Home
          </Link>
        </NavigationMenu.Item>

        <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="flex justify-center items-center hover:bg-green3 px-4 py-2 rounded-lg no-underline focus:ring-2 focus:ring-green-7 outline-none">
                <PlusIcon className="mr-2" aria-label="Create Plan" />
                Create Plan
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  Edit profile
                </Dialog.Title>
                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                  Make changes to your profile here. Click save when you're done.
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="name"
                    defaultValue="Pedro Duarte"
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="username"
                    defaultValue="@peduarte"
                  />
                </fieldset>
                <div className="mt-[25px] flex justify-end">
                  <Dialog.Close asChild>
                    <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                      Save changes
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                  >
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>

            </Dialog.Portal>
          </Dialog.Root>

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
            <NavigationMenu.Trigger
              className="flex items-center gap-2 hover:bg-green3 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-7 outline-none"
              onMouseEnter={() => handleTriggerHover(true)}
              onMouseLeave={() => handleTriggerHover(false)}
            >
              <Avatar.Root className="h-8 w-8 overflow-hidden rounded-full border-2 border-green-300">
                <Avatar.Image src={user.picture} alt={user.name} />
              </Avatar.Root>
              <CaretDownIcon
                className={classNames("transition-transform duration-250 ease-in", {
                  "transform rotate-180": isCaretRotated,
                })}
              />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content
              className="absolute bg-white w-48 rounded-md shadow-lg"
              onOpenChange={(open) => {
                setContentOpen(open);
                setCaretRotation(open);
              }}
            >
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
