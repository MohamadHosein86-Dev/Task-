import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritContext";
import type { MealShort } from "../types/types";

function MealsFoodCard(props: { meal: MealShort }) {
  const { meal } = props;
  const { toggle, isFav } = useFavorites();

  return (
    <div className="border border-gray-300 rounded overflow-hidden flex flex-col">
      <Link to={`/meal/${meal.idMeal}`} className="no-underline text-inherit">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-36 object-cover" loading="lazy" />
      </Link>
      <div className="p-2 flex justify-between items-center">
        <div className="flex-1">
          <div className="text-sm font-semibold">{meal.strMeal}</div>
        </div>
        <button onClick={() => toggle({ id: meal.idMeal, name: meal.strMeal, thumb: meal.strMealThumb })} aria-label="toggle favorite">
          {isFav(meal.idMeal) ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}

export default MealsFoodCard;
