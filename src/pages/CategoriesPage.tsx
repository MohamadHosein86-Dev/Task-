import { getCategories } from "../api/mealApi";
import CategoryGrid from "../components/CategoryGrid";
import useFetch from "../hooks/useFetch";
import type { Category } from "../types/types";

function CategoriesPage() {
  const { data, loading, error } = useFetch<Category[]>(() => getCategories(), []);
  const categories = data;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mt-20 ">Categories</h1>
      {loading && <p className="text-center mt-80 text-2xl text-gray-500">Loading categories...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && categories?.length === 0 && <p>No categories found.</p>}
      {!loading && !error && categories && <CategoryGrid categories={categories} />}
    </div>
  );
}

export default CategoriesPage;
