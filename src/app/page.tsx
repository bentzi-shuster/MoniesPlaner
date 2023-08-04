import { getSession } from "@auth0/nextjs-auth0";
import PlanView from "../components/PlanView/PlanView";
import {getPlans} from "../lib/plans"
import PlanItem from "../components/PlanItem/PlanItem";
import NewPlanForm from "../components/PlanForm/NewPlanForm";
let plans2 = [
  {Name:"Plan 1",Description:"This is a plan",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600",id:4},
  {Name:"Plan 2",Description:"This is a plan on DRUGS",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600",id:5},
  {Name:"Plan 3",Description:"This is a plan with a lot of money",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600",id:6},
  {Name:"Plan 4",Description:"This plan was made by a 5 year old",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600",id:7},

]


const Home: React.FC = async() => {
  const session = await getSession();
 let loggedIn = session && session.user && session.user["name"];
 const {plans} = await getPlans();
 console.log(plans);
  return (
    (loggedIn ?
    <>
    <h1 className="text-3xl text-center font-bold pt-20" 
    >Browse Public Plans</h1>
    </>
    :
  <>
      <h1 className="text-3xl text-center font-bold pt-20">Monnies Planner!</h1>
      <div className="mx-auto max-w-2xl py-32 sm:py-20 lg:py-13">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl  px-10">
             Life is better with a plan.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 px-6">
              Sometimes its hard to grasp the concept of money and how much you will have left after you pay your bills. Thats why we created Monnies Planner. A simple and easy to use site that will help you plan your finances and show you what your dream life will really cost you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/plans"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Make a plan
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <NewPlanForm/>
          <ul>
            {plans?.map(plan =>(
              <PlanItem key={plan.id} plan={plan}/>
            ))}
          </ul>
        </div>
      </>)

  );
};

export default Home;
