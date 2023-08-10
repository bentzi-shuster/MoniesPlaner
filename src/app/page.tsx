import { getSession } from "@auth0/nextjs-auth0";
import PlanGrid from "../components/PlanItem/PlanGrid";
import { getPlans } from "../lib/plans"
import ScrollButton from "../components/ScrollButton";
import { plan } from "@prisma/client";
import Link from "next/link";

const Home = async () => {
  const session = await getSession();
  let loggedIn = session && session.user && session.user["name"];
  const { plans } = await getPlans();
  return (
    <>
      {/* Section 1 */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/1093012473231196190/1138128787255595068/carrlos_An_image_of_diverse_young_friends_sitting_in_a_circle_c_fe9920fa-b47f-426d-8343-c1de7ad09987.png')" }}>
        <div className="max-w-md w-full space-y-8 text-center bg-white bg-opacity-75 rounded-lg p-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to <span className="wrap-none">MonniesPlanner</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Embark on a journey of financial discovery with Monnies Planner. See beyond the horizon as we help you envision your dream life and understand the financial path to get there.
          </p>

          <div className="mt-8 space-y-6">
            <Link href="/plans" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#17B890] hover:bg-[#5EEAD4]">
              Start Planning
            </Link>
            <ScrollButton targetId="planSection" contentText="See Public Plans" />
          </div>
        </div>

      </div>

      {/* Section 2 */}
      <div id="planSection" className="px-8 py-20 bg-[#CEEAE7] bg-opacity-20 relative">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[#CEEAE7]"></div>
        {/* Heading Section */}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
          {/* Existing Plans Section */}
          <div id="existingPlansSection" className="mb-12 bg-white shadow-md p-8 rounded-md">
            <div className="text-center mb-12">
              <h2 className="text-base text-[#17B890] font-semibold tracking-wide uppercase">Featured Plans</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                See how plans become reality
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Explore public plans created by the community. Get inspired and <Link href="/plans" className="text-[#FA8334] hover:underline">start planning</Link>.
              </p>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <hr className="w-auto h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-[#FA8334]" />
              <PlanGrid plans={plans as plan[]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;