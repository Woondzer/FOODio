import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MealList from "./components/MealList";
import SearchBar from "./components/SearchBar";
import FetchMeal from "./components/FetchMeal";
import MealRecipe from "./components/MealRecipe";
import limeImage from "./assets/lime.png";

function App() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query || "");
    setSearchPerformed(true);
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar flex justify-center bg-green-800">
        <h1 className="flex items-center gap-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white">
          FOODio
          <img
            src={limeImage}
            alt="Lime"
            className="size-10 sm:size-15 md:size-20 lg:size-25 xl:size-30"
          />
        </h1>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="hero min-h-[60vh] mx-auto"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center w-full flex justify-center">
                  <div className="w-full flex justify-center">
                    <SearchBar onSearch={handleSearch} />
                  </div>
                </div>
              </div>
              {searchQuery && (
                <FetchMeal searchQuery={searchQuery} onDataLoaded={setMeals} />
              )}
              <MealList meals={meals} searchPerformed={searchPerformed} />
            </>
          }
        />
        <Route path="/meal/:id" element={<MealRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
