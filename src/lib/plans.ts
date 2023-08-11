import prisma from "./prisma"
import { calculatePlan } from "../utils/ExpenseCalculator.tsx"


export async function getPlans(){
   
    try{
       
        const plans = await prisma.plan.findMany()
        return {plans}
    }catch(error){
        return {error}
    }
}

export async function getPlanTitles(){
    try{
        const plans = await prisma.plan.findMany({select:{title:true}})
        return {plans}
    }catch(error){
        return {error}
    }
}

export async function createPlan(title: string, sub: string, display_name:display_name, carPrice: number, housePrice: number, car_make: string, car_model: string) {
    try {

        // caclulatePlan returns an array object
        const planValues = calculatePlan(carPrice, housePrice);

        const plan = await prisma.plan.create({
            data: {
                title,
                user_sub: sub,
                display_name: display_name,
                car_payment: planValues[0].car_payment,
                car_insurance: planValues[0].car_insurance,
                car_expenses: planValues[0].car_expenses,
                income: planValues[0].income,
                take_home_pay: planValues[0].take_home_pay,
                mortgage: planValues[0].mortgage,
                property_tax: planValues[0].property_tax,
                groceries: planValues[0].groceries,
                entertainment: planValues[0].entertainment,
                personal_care: planValues[0].personal_care,
                needs: planValues[0].needs,
                wants: planValues[0].wants,
                savings: planValues[0].savings,
            }
        })
        return { plan }
    } catch (error) {
        console.error(error);
        return { error };
    }
} 