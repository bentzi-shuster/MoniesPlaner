import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import PageLayout from '../components/page-layout'
import { User } from '../../interfaces'

type ProfileProps = {
  user: User
}

export default function Profile({ user }: ProfileProps) {
  return (
    <PageLayout user={user}>
      <h1>Profile</h1>

      <div>
        <h3>Profile (server rendered)</h3>
        <image src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </PageLayout>
  )
}

// Protected route, checking authentication status before rendering the page.(SSR)
// It's slower than a static page with client side authentication
export const getServerSideProps = withPageAuthRequired()