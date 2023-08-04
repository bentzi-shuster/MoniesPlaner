import internal from "stream"

export type User = {
    email: string
    email_verified: boolean
    name: string
    nickname: string
    picture: string
    sub: string
    updated_at: string
    title: string
  }


export type Plan = {
  id: number
  title: string
  rent: number
  groceries: number
  utilities: number
  transportation: number
  entertainment: number
  propertyTax: number
  insurance: number
  vechiclePayment: number
  vehicleInsurance: number
  personalCare: number
  income: number
  userSub: string
  carMake: string
  carModel: string
  visibility: boolean
  createAt: string
  modifiedAt: string
}