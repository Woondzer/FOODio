function MealList({ meals, searchPerformed }) {
  return (
    <div className="w-[90%] max-w-[1000px] mx-auto">
      {/* visar fel meddelande om inte meal hittas */}
      {searchPerformed && meals.length === 0 && (
        <ul className="list bg-white shadow-md flex justify-center p-4">
          <li>
              <img src="src/assets/sadPikachu.png" alt="pikachu" className="w-60 h-75" />
          </li>
        </ul>
      )}

      {/* visar lista med meals om de hittas */}
      {meals.length > 0 && (
        <ul className="list bg-white shadow-md">
          <li className="p-4 pb-2 text-s opacity-60 text-black">
            Search result
          </li>

          {meals.map((meal) => (
            <a
              key={meal.idMeal}
              href="#"
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
            </a>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MealList;
