"use server"
import { revalidatePath } from "next/cache";
import { createPlan } from "../lib/plans";
import { Session, getSession } from "@auth0/nextjs-auth0";
import getSub from "../lib/getSub";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization:process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_TOKEN,
});

export async function createPlanAction(name: string){
  let session:Session|null|undefined = await getSession()
  if(!session){
    return
  }
const sub = getSub(session) as string|undefined;
//    if(car_make && car_model && property_tax&& rent){   
//   const imageUrl = await generateImage(car_make, car_model, property_tax, rent, sub);
// }
if(!sub){
  return
}
  await createPlan(name,sub)
  revalidatePath('/')
}

// async function generateImage(car_make:string, car_model:string, property_tax:Number, rent:Number, sub:string|undefined) {
//     //if rent appartment:Numberif property tax house if neither, then live in a van
//     let restOfPromp = () => {
//         if (rent){
//             return `next to a realistic apartment building that has a rent of ${rent} a month`
//         } else if (property_tax){
//             return `next to a realistic house that has a property tax of ${property_tax} a year`
//         } else {
//             return `what I live in because I can't afford anything else`
//         }
//     }
//     let prompt = `Make a realistic car in the driveway, the car is a  ${car_make} ${car_model} and its ${restOfPromp()}`
// const openai = new OpenAIApi(configuration);
// const response = await openai.createImage({
//     prompt: prompt,
//     n: 1,
//     size: "256x256",
//     response_format:"url",
//     user:sub
//   });
//   console.log(prompt,response.data.data[0]?.url);
//   return response.data.data[0]?.url
// }

