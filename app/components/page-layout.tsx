"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Head from 'next/head'
import NavigationMenuDemo from './menu'

type LayoutProps = {
  user?: any
  loading?: boolean
  children: React.ReactNode
}

const PageLayout = ({ user, children }: LayoutProps) => {
  const { isLoading } = useUser()
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <NavigationMenuDemo user={isLoading} loading={isLoading} />

      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </>
  )
}

export default PageLayout
