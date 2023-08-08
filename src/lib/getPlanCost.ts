import { plan } from "@prisma/client";

export default function getPlanCost(plan:plan) {
  return [plan?.entertainment ,plan?.groceries,plan?.personal_care,plan?.property_tax,plan?.utilities,plan?.rent].reduce((a, b) => isNaN(parseInt(a)) ? parseInt(b) : parseInt(a) + parseInt(b), 0)
}