import { Link } from "react-router-dom";

function MealList({ meals, searchPerformed }) {
  return (
    <div className="w-[90%] max-w-[1000px] mx-auto">
      {/* visar felmeddelande om inte meal hittas */}
      {searchPerformed && meals.length === 0 && (
        <div className="list bg-green-800 shadow-md flex flex-row justify-center items-end p-6 gap-x-6">
          <img
            src="src/assets/sadPikachu.png"
            alt="pikachu"
            className="w-60 h-auto"
          />
          <h1 className="text-7xl font-bold mb-17 text-white whitespace-nowrap">
            OH NO...
          </h1>
        </div>
      )}

      {/* visar lista med meals om de hittas */}
      {meals.length > 0 && (
        <ul className="list bg-white shadow-md">
          <li className="p-4 pb-2 text-s opacity-60 text-black">
            Search result
          </li>

          {meals.map((meal) => (
            <Link
              key={meal.idMeal}
              to={`/meal/${meal.idMeal}`}
              className="block border-t border-gray-100 first:border-t-0 hover:bg-green-100"
            >
              <li className="list-row flex items-center">
                <div>
                  <img
                    className="size-24 sm:size-32 md:size-40 rounded-box object-cover"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">
                    {meal.strMeal}
                  </div>
                  <div className="text-sm sm:text-md md:text-lg uppercase font-semibold opacity-60 text-black">
                    {meal.strCategory}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MealList;
