import PlanGrid from "@/src/components/PlanItem/PlanGrid";
import { getPlans } from "@/src/lib/plans";
import { withPageAuthRequired, getSession, UpdateSession } from '@auth0/nextjs-auth0';
import { plan } from "@prisma/client";
import NewPlanForm from "@/src/components/PlanForm/NewPlanForm";
import ScrollButton from "@/src/components/ScrollButton";

export default withPageAuthRequired(async function Account() {
  // const session = await getSession();
  const { plans } = await getPlans();
  return (
    <div id="planSection" className="px-4 py-16 bg-gray-50">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#17B890] font-semibold tracking-wide uppercase">Create a New Plan</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Plan your future
          </p>
          <p className="inline mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            <ScrollButton targetId="existingPlansSection" contentText="View existing plans" /> or start a new one.
          </p>
        </div>
        {/* Plan Form Section */}
        <div>
          <NewPlanForm />
        </div>
        {/* Existing Plans Section */}
        <div id="existingPlansSection" className="px-4 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-[#17B890] font-semibold tracking-wide uppercase">My Existing Plans</h2>
            </div>
            <PlanGrid plans={plans as plan[]} />
          </div>
        </div>

      </div>
    </div>
  )
}, { returnTo: '/plans' })