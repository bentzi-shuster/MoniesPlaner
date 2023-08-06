"use client"
import React, { ReactNode } from 'react';
import { plan } from "@prisma/client";
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Accordion from '@radix-ui/react-accordion';



// function makeAccordionItem(title: string, children:ReactNode ,id: string) {

// return (
//     <Accordion.Item value={id} className='mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 border-b border-mauve6'>
//       <Accordion.Header className="flex">
//         <Accordion.Trigger className="text-green-700 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none" >
//             {title}
//             <ChevronDownIcon
//         className="text-green-800 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 p-1.5 ml-2 flex-shrink-0 w-5 h-5 transform"
//         aria-hidden
//       />
//         </Accordion.Trigger>
//       </Accordion.Header>
//       <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
//         <div className="p-5">
//             {
//               children
//             }
//         </div>
//       </Accordion.Content>
//     </Accordion.Item>
// )
// }



const ViewPlanPopup = ({ plan, onClose }: { plan: plan | null, onClose: () => void }) => {


  return (
    <>
      {/* tailwind popup */}
      {/* <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50" 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
        }}>
        <div className="bg-white rounded-md lg:w-5/12 lg:h-5/6 overflow-auto w-11/12 h-5/6">
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
            <Image src="https://picsum.photos/50/50" alt="User Image" width="50" height="50" className="rounded-full w-5" />
             <p className="text-xs my-auto"><strong>Made by: </strong>{plan?.user_sub}</p>
            </div>       
        </div>
    <p className="text-xs"
    >{plan?.created_at.toLocaleString('en-US', { month: 'short' })} {plan?.created_at.getFullYear()}</p>


    </div>  
    <Tabs.Root
    className="flex flex-col shadow-[0_2px_10px] shadow-blackA4 w-full"
    defaultValue="Lifestyle"
  >
    <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-green-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-700 data-[state=active]:text-green-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] cursor-default"
        value="Lifestyle"
      >
        Lifestyle
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-green-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-700 data-[state=active]:text-green-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] cursor-default"
        value="Car"
      >
        Car
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-green-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-700 data-[state=active]:text-green-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] cursor-default"
        value="Income"
      >
        Income
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="Car"
    > */}
      {/* car */}
{/* 
  <Accordion.Root type="multiple" className="border border-mauve6 rounded-md overflow-hidden" defaultValue={['car', 'car_insurance', "car_payment","transportation"]}>
    {makeAccordionItem("Car Type",<p>You have a {plan?.car_make + " " + plan?.car_model}</p>,"car")}
    {makeAccordionItem("Transportation",<p>You spend ${plan?.transportation} on transportation every month</p>,"transportation")}
    {makeAccordionItem("Car Payment",<p>You need to pay ${plan?.vehicle_payment} for your {plan?.car_make + " " + plan?.car_model} every month</p>,"car_payment")}
    {makeAccordionItem("Car Insurance",<p>Your {plan?.car_make + " " + plan?.car_model} is insured with ${plan?.vehicle_insurance} coverage</p>,"car_insurance")}

  </Accordion.Root>


    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="Lifestyle"
    > */}
    {/* lifestyle */}
{/* <Accordion.Root type="multiple" className="border border-mauve6 rounded-md overflow-hidden" defaultValue={["insurance", "entertainment", "groceries", "personal_care", "property_tax", "utilities", "rent"]}>
    {makeAccordionItem("Entertainment",<p>You spend ${plan?.entertainment} on entertainment every month</p>,"entertainment")}
    {makeAccordionItem("Groceries",<p>You spend ${plan?.groceries} on groceries every month</p>,"groceries")}
    {makeAccordionItem("Personal Care",<p>You spend ${plan?.personal_care} on personal care every month</p>,"personal_care")}
    {makeAccordionItem("Property Tax",<p>You spend ${plan?.property_tax} on property tax every month</p>,"property_tax")}
    {makeAccordionItem("Utilities",<p>You spend ${plan?.utilities} on utilities every month</p>,"utilities")}
    {makeAccordionItem("Rent",<p>You spend ${plan?.rent} on rent every month</p>,"rent")}
    {makeAccordionItem("Insurance",<p>You spend ${plan?.insurance} on insurance every month</p>,"insurance")}

</Accordion.Root>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="Income"
    > */}
        {/* income */}
    {/* <h1>Your Income is ${plan?.income}</h1> */}
    {/*@ts-ignore*/}    
    {/* you spend ${[plan?.entertainment ,plan?.groceries,plan?.personal_care,plan?.property_tax,plan?.utilities,plan?.rent].reduce((a, b) => isNaN(parseInt(a)) ? parseInt(b) : parseInt(a) + parseInt(b), 0)} on expenses every month */}
    
    {/* </Tabs.Content>
  </Tabs.Root>

        </div>
        </div>
        </div>
         */}
        </>
    );
};




export default ViewPlanPopup;
