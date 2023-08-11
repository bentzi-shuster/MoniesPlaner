import prisma from "./prisma"
import { calculatePlan } from "../utils/ExpenseCalculator"


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

export async function createPlan(title: string, sub: string, display_name:string, plan_image:string,carPrice: number, housePrice: number, car_make: string, car_model: string) {
    try {

        const planValues = calculatePlan(carPrice, housePrice);

        const plan = await prisma.plan.create({
            data: {
                title,
                user_sub: sub,
                display_name: display_name,
                plan_image: plan_image,
                car_payment: planValues.car_payment,
                car_insurance: planValues.car_insurance,
                car_expenses: planValues.car_expenses,
                income: planValues.income,
                take_home_pay: planValues.take_home_pay,
                mortgage: planValues.mortgage,
                property_tax: planValues.property_tax,
                groceries: planValues.groceries,
                entertainment: planValues.entertainment,
                personal_care: planValues.personal_care,
                needs: planValues.needs,
                wants: planValues.wants,
                savings: planValues.savings,
            }
        })
        return { plan }
    } catch (error) {
        console.error(error);
        return { error };
    }
} 