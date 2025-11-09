import { useParams, useNavigate } from "react-router-dom";
import { getMealDetails } from "../api/mealApi";
import useFetch from "../hooks/useFetch";

function MealDetailPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(() => {
    if (!id) return Promise.resolve(null);
    return getMealDetails(id);
  }, [id]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
        ← Back
      </button>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {data && (
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

          <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            {Array.from({ length: 20 }, (_, i) => i + 1)
              .map((num) => {
                const ingredient = data[`strIngredient${num}`];
                const measure = data[`strMeasure${num}`];
                if (ingredient && ingredient.trim() !== "") {
                  return `${ingredient} - ${measure ?? ""}`;
                }
                return null;
              })
              .filter(Boolean)
              .map((item, idx) => (
                <li key={idx} className="text-gray-800">
                  {item}
                </li>
              ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Instructions</h3>
          <p className="whitespace-pre-line text-gray-800 leading-relaxed">{data.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default MealDetailPage;
