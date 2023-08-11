"use server"
import { revalidatePath } from "next/cache";
import { createPlan, deletePlansForUser } from "../lib/plans";
import { Session, getSession } from "@auth0/nextjs-auth0";
// import getSub from "../lib/getSub";
import getName from "../lib/getName";
import getEmail from "../lib/getEmail";
import getSub from "../lib/getSub";



const APIPATH = "/api/webScraper"

function fetcher(url: string, baseURL: string) {
  return fetch("http://" + baseURL + APIPATH + "?page=" + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((r) => r.json());
}



export async function createPlanAction(name: string, car: string, house: string, baseURL: string) {
  let session: Session | null | undefined = await getSession()
  if (!session) {
    return
  }
  let sub: string | null = getSub(session)
  if (!sub) {
    return
  }
  let accountName: string | null = getName(session)
  if (accountName) {
    let nameArray = accountName.split(" ")
    accountName = nameArray[0]
  }
  if (!accountName) {
    accountName = getEmail(session)
  }
  if (!accountName) {
    accountName = "Anonymous Ginger Snap"
  }
  let plan_image = session.user?.picture
  let housedata = await fetcher(house, baseURL)
  let cardata = await fetcher(car, baseURL)

  console.log(housedata, cardata)
  let carPrice = 0 as  string|number
  let housePrice = 0 as  string|number
  try {
     carPrice = JSON.parse(cardata["data"])[0] as  string
     housePrice = JSON.parse(housedata["data"])[0] as string
    carPrice = parseInt(carPrice.replace(/[^\d]/g, '').replace(/,/g, '').replace(/\$/g, ''))
    housePrice = parseInt(housePrice.replace(/[^\d]/g, '').replace(/,/g, '').replace(/\$/g, ''))
    console.log(carPrice, housePrice)
  } catch (e) {
    console.log(e)
  }
  let carName = cardata?.data[1]
  let houseName = housedata?.data[1]
  let carMake = carName.split(" ")[0]
  let carModel = carName.split(" ")[1]
  await createPlan(name, sub,accountName,plan_image,carPrice as number, housePrice as number,carMake,carModel)
  // revalidatePath('/')
}

export async function deletePlansForUserAction() {
  let session: Session | null | undefined = await getSession()
  if (!session) {
    return
  }
  let sub: string | null = getSub(session)
  if (!sub) {
    return
  }
  await deletePlansForUser(sub)
  // revalidatePath('/')
}