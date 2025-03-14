import './App.css'
import MealList from './assets/components/MealList';
import SearchBar from './assets/components/SearchBar'

function App() {
  return (
    <>
        <div className="navbar flex justify-center bg-green-800">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white">
            FOODio!
          </h1>
        </div>

        <div
          className="hero min-h-[60vh]"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}>
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center w-full flex justify-center">
            <div className="w-full flex justify-center">  
              <p className="mb-5">
                <SearchBar />
              </p>
            </div>
          </div>
        </div>
        <MealList />
    </>
  );
}

export default App;



