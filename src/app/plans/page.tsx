import PlanGrid from "@/src/components/PlanItem/PlanGrid";
import { getPlans } from "@/src/lib/plans";
import { withPageAuthRequired, getSession, UpdateSession } from '@auth0/nextjs-auth0';
import { plan } from "@prisma/client";
import NewPlanForm from "@/src/components/PlanForm/NewPlanForm";
import ScrollButton from "@/src/components/ScrollButton";
import getSub from "@/src/lib/getSub";

export default withPageAuthRequired(async function Account() {
  // const session = await getSession();
  const { plans } = await getPlans();
  let session = await getSession();
  let sub=getSub(session);
  return (
    <div id="planSection" className="px-8 py-20 bg-[#FFFFFF] bg-opacity-90 relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[#CEEAE7]"></div>
      
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative">

        {/* Heading Section */}
        <div className="text-center mb-12 bg-white shadow-md p-8 rounded-md">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#1A202C] sm:text-5xl">
            Plan your future
          </h1>
          <p className="inline mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            <ScrollButton targetId="existingPlansSection" contentText="View existing plans" /> or start a new one.
          </p>
        </div>

        {/* Plan Form Section */}
        <div className="mb-12 bg-white shadow-md p-8 rounded-md text-center">
          <h2 className="text-base text-[#17B890] font-semibold tracking-wide uppercase">Create a New Plan</h2>
          <p className="mt-2 text-lg text-gray-600">Take control of your life by setting clear and actionable plans.</p>
          <div className="text-left">
            <NewPlanForm />
          </div>
        </div>
        {/* Existing Plans Section */}
        <div id="existingPlansSection" className="mb-12 bg-white shadow-md p-8 rounded-md">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className=" mt-4 text-base text-[#17B890] font-semibold tracking-wide uppercase">My Existing Plans</h2>
              <p className="mt-2 text-lg text-gray-600">All your plans in one place, easy to view and manage.</p>
              <hr className="w-auto h-1 mx-auto my-4 border-0 rounded md:my-10 bg-[#FA8334]" />
            </div>
            <PlanGrid plans={plans as plan[]}  user={sub}/>
          </div>
        </div>
      </div>
    </div>
  )
}, { returnTo: '/plans' })
