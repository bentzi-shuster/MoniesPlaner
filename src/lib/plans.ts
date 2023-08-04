import { PrismaClient } from '@prisma/client'

    

var primsa = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

export async function getPlans(){
   
    try{
       
        const plans = await primsa.plan.findMany()
        return {plans}
    }catch(error){
        return {error}
    }
}

export async function getPlanTitles(){
    try{
        const plans = await primsa.plan.findMany({select:{title:true}})
        return {plans}
    }catch(error){
        return {error}
    }
}

export async function createPlan(title:string){
    try{
        const plan = await primsa.plan.create({data:{
            title, 
            rent:100,
            groceries:100,
            utilities:100,
            transportation:100,
            entertainment:100,
            insurance:100,
            vehiclePayment:100,
            vehicleInsurance:100,
            personalCare:100,
            income:100,
            userSub:'123',
            visibility:true}})
        return {plan}
    }catch(error){
        return {error}
    }
} 