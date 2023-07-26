import PageLayout from './components/page-layout';

const Home = () => {
  return (
    <PageLayout>
      <h1>Next.js and Auth0 Example</h1>
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