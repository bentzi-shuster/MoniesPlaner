import { getSession } from "@auth0/nextjs-auth0";
import PlanView from "../components/PlanItem/PlanView";
import { getPlans } from "../lib/plans"
import NewPlanForm from "../components/PlanForm/NewPlanForm";
import { Plan } from "@prisma/client";


const Home = async () => {
  const session = await getSession();
  let loggedIn = session && session.user && session.user["name"];
  const { plans } = await getPlans();
  console.log(plans);
  return (
    (loggedIn ?
      <>
        <h1 className="text-3xl text-center font-bold pt-20"
        >Browse Public Plans</h1>
      </>
      :
      <>
        <h1 className="text-3xl text- text-center font-bold pt-20">Monnies Planner!</h1>
        <div className="mx-auto max-w-2xl py-32 sm:py-20 lg:py-13">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl  px-10">
              Life is better with a plan.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 px-6">
              Embark on a journey of financial discovery with MonniesPlanner,
              where your dreams find a clear path to reality. See beyond the horizon
              as we help you envision your dream life - from that cozy house to those
              sleek cars - and understand the financial path to get there. Take charge
              of your future today and turn aspirations into well-planned realities
              with MonniesPlanner by your side.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/plans"
                className="rounded-md bg-[#17B890] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-[#0D9488] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Start Planning
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <NewPlanForm />
        </div>
        <PlanView plans={plans as Plan[]} />
      </>)

  );
};

export default Home;