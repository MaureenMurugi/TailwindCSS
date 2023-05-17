import logo from './logo.svg';
import '../src/Styles/input.css';
import bean from '../src/Images/bean.jpg'

function App() {
  return (
    <div className="text-gray-600 font-body">
      <main className="px-16 py-6 bg-gray-400" >
        <div className="flex justify-center md:justify-end">
          <a href="#"className="btn text-primary border-primary md:border-2">Log in</a>
          <a href="#" className="btn text-primary ml-2 border-primary md:border-2">Sign up</a>
        </div>
        <header>
          <h1 className="text-gray-400 text-6xl font-semibold">Recipes</h1>
          <h2 className="text-2xl font-semibold text-green-500 sm:text-red-500">For Murugi</h2>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200" >Latest Recipes</h4>
          
          <div className="mt-8 grid lg:grid-cols-3 gap-10">

            {/* Cards go here */}
            <div className="card">
              <img src={bean} alt="food" className="w-full h-32 sm:h-48 object-cover"></img>
              <div className="m-4">
                <span className="font-bold">5 Bean Stew</span>
                <br/>
                <span className="block text-gray-500 text-small">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>25 min</span>
              </div>
            </div>

            <div className="card">
              <img src={bean} alt="food" className="w-full h-32 sm:h-48 object-cover"></img>
              <div className="m-4">
                <span className="font-bold">5 Bean Stew</span>
                <br/>
                <span className="block text-gray-500 text-small">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>25 min</span>
              </div>
            </div>

            <div className="card">
              <img src={bean} alt="food" className="w-full h-32 sm:h-48 object-cover"></img>
              <div className="m-4">
                <span className="font-bold">5 Bean Stew</span>
                <br/>
                <span className="block text-gray-500 text-small">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>25 min</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200 ">Most Popular</h4>

          <div className="mt-8">
            {/* Cards go here */}
          </div>

          <div className="flex justify-center" >
            <div className="btn bg-secondary-100">Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
