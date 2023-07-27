"use client"
import PageLayout from './components/page-layout';
import { useUser } from "@auth0/nextjs-auth0/client";

const Home = () => {
  const { user, isLoading } = useUser()
  return (
    <PageLayout user={user} loading={isLoading}>
      <h1 className="text-2xl">Next.js and Auth0 Example</h1>
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to navigate between
            protected routes: client rendered, server rendered profile pages,
            and <i>Logout</i>
          </p>
        </>

    </PageLayout>
  )
}
// fast/cached SSR page
export default Home