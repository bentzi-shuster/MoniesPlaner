import PlanGrid from "@/src/components/PlanItem/PlanGrid";
import { getPlans } from "@/src/lib/plans";
import { withPageAuthRequired, getSession, UpdateSession } from '@auth0/nextjs-auth0';
import { plan } from "@prisma/client";

export default withPageAuthRequired(async function Account() {
  // const session = await getSession();
  const { plans } = await getPlans();
  return (
    <div>
      <h1 className="text-3xl text-center font-bold pt-20"
      >My Plans</h1>
      <PlanGrid plans={plans as plan[]} />
    </div>
  )
}, { returnTo: '/plans' })