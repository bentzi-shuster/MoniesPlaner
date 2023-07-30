import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired( async function NewPlan(){

  const session = await getSession();
  return (
<>
      <h1 className="text-3xl">Welcome {session?.user["name"]}</h1>
      <a href="/api/auth/logout">logout</a>
</>

    )
  },{returnTo:"/plans/new"})


  
