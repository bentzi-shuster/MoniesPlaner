import PlanGrid from "@/src/components/PlanItem/PlanGrid"


export default async function Account({params}:{params:{planid:string}}) {
    // const session = await getSession();
    let plans2 = [
        {Name:"Plan A",Description:"Rob a bank",Cost:0,Income:0,Img:"https://picsum.photos/900/600"},
        {Name:"Plan B",Description:"Go To Jail",Cost:" my freedom",Income:0.01,Img:"https://picsum.photos/900/600"},
        {Name:"Plan C",Description:"Escape Jail",Cost:"However much the guards are willing to take",Income:0.01,Img:"https://picsum.photos/900/600"},
        {Name:"Plan D",Description:"Dig a hole to China with a spoon",Cost:"A spoon",Income:"Still 0.01",Img:"https://picsum.photos/900/600"},
        {Name:"Plan 1",Description:"This is a plan",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 2",Description:"This is a plan on DRUGS",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 3",Description:"This is a plan with a lot of money",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 4",Description:"This plan was made by a 5 year old",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan A",Description:"Rob a bank",Cost:0,Income:0,Img:"https://picsum.photos/900/600"},
        {Name:"Plan B",Description:"Go To Jail",Cost:" my freedom",Income:0.01,Img:"https://picsum.photos/900/600"},
        {Name:"Plan C",Description:"Escape Jail",Cost:"However much the guards are willing to take",Income:0.01,Img:"https://picsum.photos/900/600"},
        {Name:"Plan D",Description:"Dig a hole to China with a spoon",Cost:"A spoon",Income:"Still 0.01",Img:"https://picsum.photos/900/600"},
        {Name:"Plan 1",Description:"This is a plan",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 2",Description:"This is a plan on DRUGS",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 3",Description:"This is a plan with a lot of money",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 4",Description:"This plan was made by a 5 year old",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan A",Description:"Rob a bank",Cost:0,Income:0,Img:"https://picsum.photos/900/600"},
        {Name:"Plan B",Description:"Go To Jail",Cost:" my freedom",Income:0.01,Img:"https://picsum.photos/900/600"},
        {Name:"Plan C",Description:"Escape Jail",Cost:"However much the guards are willing to take",Income:0.01,Img:"https://picsum.photos/900/600"},
        {Name:"Plan D",Description:"Dig a hole to China with a spoon",Cost:"A spoon",Income:"Still 0.01",Img:"https://picsum.photos/900/600"},
        {Name:"Plan 1",Description:"This is a plan",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 2",Description:"This is a plan on DRUGS",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 3",Description:"This is a plan with a lot of money",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 4",Description:"This plan was made by a 5 year old",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan A",Description:"Rob a bank",Cost:0,Income:0,Img:"https://picsum.photos/900/600"},
        {Name:"Plan B",Description:"Go To Jail",Cost:" my freedom",Income:0.01,Img:"https://picsum.photos/900/600"},
        {Name:"Plan C",Description:"Escape Jail",Cost:"However much the guards are willing to take",Income:0.01,Img:"https://picsum.photos/900/600"},
        {Name:"Plan D",Description:"Dig a hole to China with a spoon",Cost:"A spoon",Income:"Still 0.01",Img:"https://picsum.photos/900/600"},
        {Name:"Plan 1",Description:"This is a plan",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 2",Description:"This is a plan on DRUGS",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 3",Description:"This is a plan with a lot of money",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
        {Name:"Plan 4",Description:"This plan was made by a 5 year old",Cost:1000,Income:2000,Img:"https://picsum.photos/900/600"},
      ]
      //if planid is not a number, return 404
        if(isNaN(parseInt(params.planid))){
            return (
                <div>
                    <h1>404</h1>
                    </div>
                )
        }else{
            let planid = parseInt(params.planid)
        return (
            <div>
                {/* banner */}
             <span style={{
                background: `url(https://picsum.photos/900/600)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                }}
                 className="h-72 w-full text-center text-5xl font-bold flex items-center justify-center">
                    <div className="bg-white bg-opacity-60 w-full h-full border-b-green-800 border-b-8 flex items-center justify-center">
                        {plans[planid].Name}
                    </div>               
             </span>
                {/* description */}
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="w-1/2 text-center text-2xl font-bold">
                        {plans[planid].Description}

                    </div>
                    <div className="w-1/2 text-center text-md flex md:flex-row flex-col items-center justify-center gap-4 mt-12">
                        <span className="bg-green10 text-white px-4 py-2 rounded-full">
                            Cost: ${plans[planid].Cost}
                        </span>
                        <span className="bg-green10 text-white px-4 py-2 rounded-full">
                            Income: ${plans[planid].Income}
                        </span>
                        </div>
                    </div>
                </div>
            )
        }
    }