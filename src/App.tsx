import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoriesMealPage from "./pages/CategoriesPage";
import MealsFoodsPage from "./pages/MealsFoodsPage";
import MealFoodDetailPage from "./pages/MealFoodDetailPage";
import Header from "./components/Header";
import { FavoritesProvider } from "./context/FavoritContext";

const App: React.FC = () => (
  <BrowserRouter>
    <FavoritesProvider>
      <Header />
      <main className="contaner">
        <Routes>
          <Route path="/" element={<CategoriesMealPage />} />
          <Route path="/category/:category" element={<MealsFoodsPage />} />
          <Route path="/meal/:id" element={<MealFoodDetailPage />} />
        </Routes>
      </main>
    </FavoritesProvider>
  </BrowserRouter>
);

export default App;
