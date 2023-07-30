
const Home: React.FC = () => {

  

  return (
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
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Make a plan
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </>

  );
};

export default Home;
