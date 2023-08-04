import { Plan } from "@prisma/client";

type PlanItemProps = {
    plan: Plan
}
const PlanItem = ({plan} : PlanItemProps) => {
    console.log(plan);
    if(plan !=undefined ){
        return <li>{plan.title}</li>
    }else{
        return null
    }
}

export default PlanItem;