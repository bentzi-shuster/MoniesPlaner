import PlanGrid from "@/src/components/PlanItem/PlanGrid"
import { getPlans } from "@/src/lib/plans";
import { plan } from "@prisma/client";
import Link from "next/link";

export default async function Account() {
    // const session = await getSession();
    const { plans } = await getPlans();
    return (
        <div id="planSection" className="px-4 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-[#17B890] font-semibold tracking-wide uppercase">Community Plans</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        See how plans become reality
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Explore public plans created by the community. Get inspired and <Link href="/plan" className="text-[#FA8334] hover:underline">start planning</Link>.
                    </p>
                </div>
                <PlanGrid plans={plans as plan[]} />
            </div>
        </div>
    )
}