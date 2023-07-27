"use client"

import Head from 'next/head'
import NavigationMenuDemo from './menu'
import Footer from './page-footer'
type LayoutProps = {
  user?: any
  loading?: boolean
  children: React.ReactNode
}

const PageLayout = ({ user, loading = false, children  }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <NavigationMenuDemo user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default PageLayout
