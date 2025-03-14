

function MealList({ meals }) {
  if (meals.length === 0) return null;

  return (
    <ul className="list bg-white shadow-md w-[90%] max-w-[1000px] mx-auto">
      <li className="p-4 pb-2 text-s opacity-60 text-black">Search result</li>

      {meals.length === 0 ? (
        <p className="text-center p-4 text-black">No meals found.</p>
      ) : (
        meals.map((meal) => 
          <a key={meal.idMeal} href="#" className="block border-t border-gray-100 first:border-t-0 hover:bg-green-100">
            <li className="list-row flex items-center">
              <div>
                <img className="size-24 sm:size-32 md:size-40 rounded-box" 
                    src={meal.strMealThumb} 
                    alt={meal.strMeal} />
              </div>

              <div>
                <div className=" text-xl sm:text-2xl md:text-4xl font-semibold text-black">{meal.strMeal}</div>
                <div className="text-sm sm:text-md md:text-lg uppercase font-semibold opacity-60 text-black">{meal.strCategory}</div>
              </div>
            </li>
          </a>
        )
      )}
    </ul>
  );
}

export default MealList;
