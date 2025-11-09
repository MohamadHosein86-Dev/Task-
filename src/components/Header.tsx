import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritContext";

export default function Header() {
  const { favorites } = useFavorites();
  return (
    <header className=" font-semibold flex rounded-b-2xl items-center justify-between py-4 px-8 bg-amber-200 ">
      <Link to="/">
        <h2>Recipe Browser</h2>
      </Link>
      <div className=" flex gap-4 ">
        <Link className="  text-red-400 " to="/">
          Categories
        </Link>
        <span>Favorites: {favorites.length}</span>
      </div>
    </header>
  );
}
