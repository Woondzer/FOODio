import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MealRecipe() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setMeal(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    fetchMealRecipe();
  }, [id]);

  if (!meal) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      {/* Namn */}
      <div className="card w-full max-w-3xl bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-center text-green-700">
          {meal.strMeal}
        </h2>
        {/* Bild */}
        <div className="flex justify-center mt-4">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-lg w-full max-w-md shadow-md"
          />
        </div>
        {/* badge */}
        <div className="text-center mt-4 text-black">
          <span className="ml-2 badge badge-accent p-3 text-lg">
            {meal.strArea}
          </span>
          <span className="badge badge-secondary p-3 text-lg">
            {meal.strCategory}
          </span>

          {/* ingredienser */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-700">
              Ingredients:
            </h3>
            <div className="grid grid-cols-2 mt-2">
              {/* vänster */}
              <ul className="list-none text-right pr-6 text-gray-700">
                {ingredients.map((item, index) => (
                  <li key={index} className="py-1 font-semibold">
                    {item.measure}
                  </li>
                ))}
              </ul>
              {/* höger */}
              <ul className="list-none text-left pl-6 text-gray-700">
                {ingredients.map((item, index) => (
                  <li key={index} className="py-1">
                    {item.ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* instruktioner */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-700">
              {" "}
              Instructions:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {meal.strInstructions}
            </p>
          </div>
          {/* youtube film/länk */}
          {meal.strYoutube && (
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-green-700">
                Watch Tutorial:
              </h3>
              <div className="flex justify-center mt-2">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info text-white"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          )}

          {/* tillbaka knapp */}
          <div className="mt-6 flex justify-center">
            <Link
              to="/"
              className="btn btn-error text-white text-xl font-bold w-full max-w-[300px]"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealRecipe;
