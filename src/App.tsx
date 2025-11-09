import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import MealsPage from "./pages/MealsPage";
import MealDetailPage from "./pages/MealDetailPage";
import Header from "./components/Header";
import { FavoritesProvider } from "./context/FavoritContext";

const App: React.FC = () => (
  <BrowserRouter>
    <FavoritesProvider>
      <Header />
      <main className="contaner">
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          <Route path="/category/:category" element={<MealsPage />} />
          <Route path="/meal/:id" element={<MealDetailPage />} />
        </Routes>
      </main>
    </FavoritesProvider>
  </BrowserRouter>
);

export default App;
