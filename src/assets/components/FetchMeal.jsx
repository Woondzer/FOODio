import { useEffect } from "react";

function FetchMeal({ searchQuery, onDataLoaded }) {
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
                if (!response.ok) throw new Error("Failed to fetch meals");
                const data = await response.json();
                onDataLoaded(data.meals || []);
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
        };

       fetchMeals();
        
    }, [searchQuery]); // ✅ Runs every time `searchQuery` changes

    return null; // No UI needed
}

export default FetchMeal;
