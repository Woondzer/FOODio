import './App.css'
import { useState } from 'react';
import MealList from './assets/components/MealList';
import SearchBar from './assets/components/SearchBar'
import FetchMeal from './assets/components/FetchMeal';

function App() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
              <SearchBar onSearch={(query) => setSearchQuery(query || "")} />
            </div>
          </div>
        </div>
        {searchQuery && <FetchMeal searchQuery={searchQuery} onDataLoaded={setMeals} />}
        <MealList meals={meals} />
    </>
  );
}

export default App;



