import { plan } from "@prisma/client";
// id                  Int       @id @default(autoincrement())
// title               String
// car_payment          Float
// car_insurance        Float
// car_expenses         Float
// income              Float
// take_home_pay         Float
// mortgage            Float
// property_tax         Float
// groceries           Float
// entertainment       Float
// personal_care        Float
// needs               Float
// wants               Float
// savings             Float
// user_sub            String
// display_name        String @default("No Name")
// car_make             String?  // Optional field for car make
// car_model            String?  // Optional field for car model
// published           Boolean @default(true) // 'true' or 'false' for plan publish status
// deleted             Boolean @default(false) // 'true' or 'false' for plan deletion status
// created_at          DateTime @default(now())
// modified_at         DateTime @updatedAt
// plan_image          String? // Optional field for user image
// }
export default function getPlanCost(plan:plan):number {
    let arrtemp= [plan?.car_payment,plan?.car_insurance,plan?.car_expenses,plan?.income,plan?.take_home_pay,plan?.mortgage,plan?.property_tax,plan?.groceries,plan?.entertainment,plan?.personal_care,plan?.needs,plan?.wants,plan?.savings]
//   return 
function getSum(total:number, num:number):number {
    return total + num;
  }
  //@ts-ignore
  let sum = arrtemp.reduce(getSum)
return Math.floor(sum) as number
    
}