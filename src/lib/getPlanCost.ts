import { plan } from "@prisma/client";

export default function getPlanCost(plan:plan):number {
    let arrtemp= [plan?.entertainment ,plan?.groceries,plan?.personal_care,plan?.property_tax,plan?.utilities,plan?.rent]
//   return 
function getSum(total:number, num:number):number {
    return total + num;
  }
  //@ts-ignore
  let sum = arrtemp.reduce(getSum)
return sum as number
    
}