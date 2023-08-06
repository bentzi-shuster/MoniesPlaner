import PlanGrid from "@/src/components/PlanItem/PlanGrid"
import { getPlans } from "@/src/lib/plans";
import { plan } from "@prisma/client";

export default async function Account() {
    // const session = await getSession();
    const { plans } = await getPlans();
    return (
        <div>
            <h1 className="text-3xl text-center font-bold pt-20"
            >Public Plans</h1>
            <PlanGrid plans={plans as plan[]} />
        </div>
    )
}