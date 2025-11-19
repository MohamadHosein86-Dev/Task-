import { Link } from "react-router-dom";
import type { Category } from "../types/types";

function CategoryMealCard(props: { cat: Category }) {
  const { cat } = props;

  return (
    <Link to={`/category/${encodeURIComponent(cat.strCategory)}`} className="no-underline text-inherit">
      <div className="border border-gray-300 rounded overflow-hidden">
        <img src={cat.strCategoryThumb} alt={cat.strCategory} className="w-full h-30 object-cover" loading="lazy" />
        <div className="p-2">
          <h3 className="m-0 text-base">{cat.strCategory}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryMealCard;
