const BASE = "https://www.themealdb.com/api/json/v1/1";

async function safeJson(res: Response) {
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

export async function getCategories() {
  try {
    const res = await fetch(`${BASE}/categories.php`);
    const json = await safeJson(res);
    return json.categories || [];
  } catch  {
    console.error("Failed to get categories:");
    return [];
  }
}

export async function getMealsByCategory(category: string) {
  try {
    const res = await fetch(`${BASE}/filter.php?c=${category}`);
    const json = await safeJson(res);
    return json.meals || [];
  } catch  {
    console.error(`Failed to get meals for category ${category}:`);
    return [];
  }
}

export async function searchMeals(query: string) {
  try {
    const res = await fetch(`${BASE}/search.php?s=${query}`);
    const json = await safeJson(res);
    return json.meals || [];
  } catch  {
    console.error(`Failed to search meals for query "${query}":`);
    return [];
  }
}

export async function getMealDetails(id: string) {
  try {
    const res = await fetch(`${BASE}/lookup.php?i=${id}`);
    const json = await safeJson(res);
    return json.meals && json.meals[0] ? json.meals[0] : null;
  } catch  {
    console.error(`Failed to get meal details for id ${id}:`);
    return null;
  }
}
