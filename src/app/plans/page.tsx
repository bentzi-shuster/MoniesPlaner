import PlanView from '@/src/components/PlanView/PlanView';
import { withPageAuthRequired, getSession, UpdateSession } from '@auth0/nextjs-auth0';
export default withPageAuthRequired (async function Account() {
    // const session = await getSession();
    let plans = [
        {Name:"Plan A",Description:"Rob a bank",Cost:0,Income:0,Img:"https://picsum.photos/900/600",id:0},
        {Name:"Plan B",Description:"Go To Jail",Cost:" my freedom",Income:0.01,Img:"https://picsum.photos/900/600",id:1},
        {Name:"Plan C",Description:"Escape Jail",Cost:"However much the guards are willing to take",Income:0.01,Img:"https://picsum.photos/900/600",id:2},
        {Name:"Plan D",Description:"Dig a hole to China with a spoon",Cost:"A spoon",Income:"Still 0.01",Img:"https://picsum.photos/900/600",id:3},
      ]
        return (
            <div>
             <h1 className="text-3xl text-center font-bold pt-20" 
             >My Plans</h1>
<PlanView plans={plans}/>
                </div>
            )
    }, { returnTo: '/plans' })