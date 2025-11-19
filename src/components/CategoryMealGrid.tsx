import CategoryCard from "./CategoryMealCard";
import type { Category } from "../types/types";

function CategoryMealGrid(props: { categories: Category[] }) {
  const { categories } = props;

  return (
    <div className="grid gap-3 mt-10 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
      {categories.map((c) => (
        <CategoryCard key={c.idCategory} cat={c} />
      ))}
    </div>
  );
}

export default CategoryMealGrid;
