import PlanGrid from "@/src/components/PlanItem/PlanGrid"
import { getPlans } from "@/src/lib/plans";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { plan } from "@prisma/client";
import Link from "next/link";

export default withPageAuthRequired(async function AllPlans() {
    // const session = await getSession();
    const { plans } = await getPlans()
    return (
        <div id="planSection" className="px-8 py-20 bg-[#FFFFFF] bg-opacity-90 relative">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[#CEEAE7]"></div>
            {/* Heading Section */}
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
                {/* Existing Plans Section */}
                <div id="existingPlansSection" className="mb-12 bg-white shadow-md p-8 rounded-md">
                    <div className="text-center mb-12">
                        <h2 className="text-base text-[#17B890] font-semibold tracking-wide uppercase">Community Plans</h2>
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

    )
}, { returnTo: '/allplans' });