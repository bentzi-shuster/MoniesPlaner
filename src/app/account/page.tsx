import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
export default withPageAuthRequired (async function Account() {
    const session = await getSession();

        return (
            <div>
                <h1>Account</h1>
                <p>Hi, {session?.user.name || session?.user.email}</p>
                </div>
            )
    }, { returnTo: '/account' })