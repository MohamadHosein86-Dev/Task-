import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealsByCategory, searchMeals } from "../api/mealApi";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";
import type { MealShort } from "../types/types";
import useFetch from "../hooks/useFetch";

function MealsPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<MealShort[] | null>(null);

  const { category } = useParams<{ category?: string }>();
  const decodedCategory = category ? decodeURIComponent(category) : "";

  const { data, loading, error } = useFetch<MealShort[] | null>(() => getMealsByCategory(decodedCategory), [decodedCategory]);

  async function onSearch(query: string) {
    if (!query) {
      setSearchResults(null);
      return;
    }
    try {
      const results = await searchMeals(query);
      setSearchResults(results ?? []);
    } catch {
      alert("Search failed");
    }
  }

  const mealsToShow = searchResults ?? data ?? [];

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-4">{decodedCategory ? `Meals: ${decodedCategory}` : "Meals"}</h1>
      <SearchBar onSearch={onSearch} />

      {loading && <p className="text-center mt-80 text-2xl text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {mealsToShow.length === 0 && !loading && <p>No meals found.</p>}
      {mealsToShow.length > 0 && (
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
          {mealsToShow.map((meal: MealShort) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MealsPage;
