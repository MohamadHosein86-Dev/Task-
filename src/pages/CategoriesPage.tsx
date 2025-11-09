import { getCategories } from "../api/mealApi";
import CategoryGrid from "../components/CategoryGrid";
import useFetch from "../hooks/useFetch";

function CategoriesPage() {
  const { data, loading, error } = useFetch(() => getCategories(), []);
  const categories = data ?? [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mt-20 ">Categories</h1>

      {loading && <p>Loading categories...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && categories.length === 0 && <p>No categories found.</p>}
      {!loading && !error && categories.length > 0 && <CategoryGrid categories={categories} />}
    </div>
  );
}

export default CategoriesPage;
