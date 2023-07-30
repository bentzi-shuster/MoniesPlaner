
const Home: React.FC = () => {

  

  return (
  <>
      <h1 className="text-3xl">Next.js and Auth0 Example</h1>
      
        <p>
          To test the login click on <i>Login</i>
        </p>
        <p>
          Once you have logged in you should be able to navigate between
          protected routes: client rendered, server rendered profile pages,
          and <i>Logout</i>
        </p>
      </>

  );
};

export default Home;
