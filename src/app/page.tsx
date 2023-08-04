import { getSession } from "@auth0/nextjs-auth0";
import PlanView from "../components/PlanItem/PlanView";
import { getPlans } from "../lib/plans"
import NewPlanForm from "../components/PlanForm/NewPlanForm";
import { Plan } from "@prisma/client";
import Link from "next/link";


const Home = async () => {
  const session = await getSession();
  let loggedIn = session && session.user && session.user["name"];
  const { plans } = await getPlans();
  console.log(plans);
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/1093012473231196190/1136824141207568455/carrlos_An_image_of_diverse_young_friends_sitting_in_a_circle_c_a912081b-81c2-4bb4-8c9a-610d285cd181.png')" }}>
        <div className="max-w-md w-full space-y-8 text-center bg-white bg-opacity-75 rounded-lg p-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to <span className="wrap-none">Monnies Planner</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Embark on a journey of financial discovery with Monnies Planner. See beyond the horizon as we help you envision your dream life and understand the financial path to get there.
          </p>

          <div className="mt-8 space-y-6">
            <Link href="/plans" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#17B890] hover:bg-[#5EEAD4]">
              Start Planning
            </Link>

            <Link href="/subscribe" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FA8334] hover:bg-[#B0F0E6]">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>

      </div>

      {/* Section 2 */}

      <div className="mt-8 px-2">
        <h2 className="text-3xl font-extrabold text-gray-900">
          See how plans become reality
        </h2>
        <PlanView plans={plans as Plan[]} />
      </div>
    </>
  );
};

export default Home;