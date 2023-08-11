import React, { ReactNode } from 'react';
import { plan } from "@prisma/client";
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Accordion from '@radix-ui/react-accordion';
import getPlanCost from '../../../src/lib/getPlanCost';

const ViewPlanPopup = ({ plan, onClose }: { plan: plan | null, onClose: () => void }) => {

function makeNumberUserFriendly(num: number|null|undefined,fallback=0):string {
  return num ? "$"+Math.floor(num):fallback as unknown as string;
}

  function makeAccordionItem(title: string, childrenArr:ReactNode[] ,id: string) {

    return (
        <Accordion.Item value={id} className='mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 border-b border-mauve6'>
          <Accordion.Header className="flex">
            <Accordion.Trigger className="text-green-700 shadow-mauve6 hover:bg-mauve4 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none" >
                {title}
                <ChevronDownIcon
            className="text-green-800 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 p-1.5 ml-2 flex-shrink-0 w-5 h-5 transform"
            aria-hidden
          />
            </Accordion.Trigger>
          </Accordion.Header>
          {childrenArr.map((child) => {
            return makeAccordionContent(child)
          })}
        </Accordion.Item>
    )
    }
    function makeAccordionContent(children:ReactNode) {
    return (
        <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] border-t border-mauve6">
          <div className="p-5">
              {
                children
              }
          </div>
        </Accordion.Content>
        )
    }
    

  return (
    <>
      {/* tailwind popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 viewplanpopupbg"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}>
        <div className="bg-white rounded-md lg:w-5/12 lg:h-5/6 overflow-auto w-11/12 h-5/6 viewplanpopup">
          <Image
            src="https://picsum.photos/1500/1000"
            width="1500"
            height="1000"
            className="rounded-t-md w-full"
            alt="Plan Image"
          />
          <div className="p-4">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="top flex flex-col items-start mb-1 justify-between">
                <h3 className="text-xl font-bold"
                >{plan?.title}</h3>
                <div className="user flex gap-2 flex-row items-end mt-2">
                  {/*@ts-ignore <-- his is needed until we update the db schema*/}
                  {/* <Image src={(plan&&plan.pfp_url)?plan?.pfp_url:"https://picsum.photos/50/50"} alt={`Made by ${(plan&&plan.display_name)?plan?.display_name:"Unknown"}`} width="50" height="50" className="rounded-full w-5" /> */}
                  {/* the avatar and username */}
                  <div className={`w-6 h-6 overflow-hidden rounded-full transition-opacity duration-300 border-[1px] border-blackA4`}
                    style={{
                      background: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
                    }}
                  >
                    {/*@ts-ignore <-- his is needed until we update the db schema*/}
                    {plan.pfp_url ? <Image src={plan?.pfp_url} alt={plan.display_name} width={24} height={24} className="object-cover w-full h-full min-w-[24px] min-h-[24px]" /> : <p className="font-semibold font-sans flex items-center text-black bg-[#ffffff69] w-full h-full justify-center leading-tight">{plan.display_name.charAt(0)}</p>}
                  </div><p className="text-xs my-auto"><strong>Made by: </strong>{plan?.display_name}</p>
                </div>
              </div>
              <p className="text-xs"
              >{plan?.created_at.toLocaleString('en-US', { month: 'short' })} {plan?.created_at.getFullYear()}</p>


            </div>
            <Tabs.Root
              className="flex flex-col shadow-[0_2px_10px] shadow-blackA4 w-full"
              defaultValue="IncomeAndGoals"
            >
              <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Tabs">
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-green-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-700 data-[state=active]:text-green-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] cursor-default"
                  value="IncomeAndGoals"
                >
                  Income & Goals
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-green-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-700 data-[state=active]:text-green-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] cursor-default"
                  value="Transportation"
                >
                  Transportation
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-green-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-700 data-[state=active]:text-green-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] cursor-default"
                  value="Lifestyle"
                >
                  Lifestyle
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content
                className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black IncomeAndGoals"
                value="IncomeAndGoals"
              >
                <Accordion.Root type="multiple" className="border border-mauve6 rounded-md overflow-hidden" defaultValue={['income']}>

{makeAccordionItem("Income and Goals",[
<p key={"1"}>Income: {makeNumberUserFriendly(plan?.income,0)}</p>,
<p key={"2"}>Needs Allocation: {makeNumberUserFriendly(plan?.needs,0)}</p>,
<p key={"3"}>Wants Allocation: {makeNumberUserFriendly(plan?.wants,0)}</p>,
<p key={"4"}>Savings Allocation: {makeNumberUserFriendly(plan?.savings,0)}</p>
],"income")}
                </Accordion.Root>


              </Tabs.Content>
              <Tabs.Content
                className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black Transportation"
                value="Transportation"
              >
                {/* lifestyle */}
                <Accordion.Root type="multiple" className="border border-mauve6 rounded-md overflow-hidden" defaultValue={["transportation"]}>
               
                {makeAccordionItem("Transportation",[
<p key={"1"}>Car Type: {(plan?.car_model&&plan?.car_make)?plan?.car_model+" "+plan?.car_make:"Unknown"}</p>,
<p key={"2"}>Car Payment: {makeNumberUserFriendly(plan?.car_payment,0)}</p>,
<p key={"3"}>Car Insurance: {makeNumberUserFriendly(plan?.car_insurance,0)}</p>,
<p key={"4"}>Car Expenses: {makeNumberUserFriendly(plan?.car_expenses,0)}</p>,
],"transportation")}

                </Accordion.Root>
              </Tabs.Content>
              <Tabs.Content
                className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black Lifestyle"
                value="Lifestyle"
              >
                {/* income */}
                {/* <h1>Your Income is ${plan?.income}</h1> */}
                {/*@ts-ignore*/}
                {/* you spend ${getPlanCost(plan)} on expenses every month */}
                <Accordion.Root type="multiple" className="border border-mauve6 rounded-md overflow-hidden" defaultValue={["lifestyle"]}>

                {makeAccordionItem("Lifestyle",[
<p key={"1"}>Take-Home Pay: {makeNumberUserFriendly(plan?.take_home_pay,0)}</p>,
<p key={"2"}>Monthly Mortgage: {makeNumberUserFriendly(plan?.mortgage,0)}</p>,
<p key={"3"}>Property Tax: {makeNumberUserFriendly(plan?.property_tax,0)}</p>,
<p key={"4"}>Groceries Budget: {makeNumberUserFriendly(plan?.groceries,0)}</p>,
<p key={"5"}>Entertainment Budget: {makeNumberUserFriendly(plan?.entertainment,0)}</p>,
<p key={"6"}>Personal Care Budget: {makeNumberUserFriendly(plan?.personal_care,0)}</p>,
],"lifestyle")}


                </Accordion.Root>


              </Tabs.Content>
            </Tabs.Root>

          </div>
        </div>
      </div>

    </>
  );
};




export default ViewPlanPopup;
