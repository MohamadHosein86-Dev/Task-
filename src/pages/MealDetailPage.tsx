import { useParams, useNavigate } from "react-router-dom";
import { getMealDetails } from "../api/mealApi";
import useFetch from "../hooks/useFetch";
import type { MealDetail } from "../types/types";

function MealDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch<MealDetail>(() => {
    if (!id) return Promise.resolve(null);
    return getMealDetails(id);
  }, [id]);

  if (!data) return null;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
        ← Back
      </button>

      {loading && <p className="text-center mt-80 text-2xl text-gray-500">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">{data.strMeal}</h1>

        {data.strMealThumb && <img src={data.strMealThumb} alt={data.strMeal} className="mx-auto mb-6 w-full max-w-md rounded-lg shadow-sm" />}

        <div className="flex justify-around mb-6 text-gray-700 font-medium">
          <p>
            <span className="font-semibold">Category:</span> {data.strCategory}
          </p>
          <p>
            <span className="font-semibold">Area:</span> {data.strArea}
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-2">Instructions</h3>
        <p className="whitespace-pre-line text-gray-800 leading-relaxed">{data.strInstructions}</p>
      </div>
    </div>
  );
}

export default MealDetailPage;
