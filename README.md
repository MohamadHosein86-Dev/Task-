1. Your Code

1.1 Walk me through how the search feature works?
The search feature is inside the MealsPage component. When the user types something and clicks the search button, it calls the searchMeals() function from my API file. That function fetches results from TheMealDB API using async/await. I store the results in a state called searchResults and display them on the page. If the search input is empty, it just shows the meals from the selected category again.

1.2 How do you save favorites to localStorage?
I made a small FavoritesContext that stores the favorite meals in a state array. When the app starts, it reads from localStorage using getItem, and whenever the favorites list changes, it saves the new data back using setItem. The data is stored as JSON. Each meal card has a star button that calls a toggle() function to add or remove a meal from favorites.

1.3 Why did you structure components this way?
I tried to keep the code clean and easy to follow.

pages/ folder has main pages like Categories, Meals, and Meal Details.

components/ has small UI parts like cards, search bar, and header.

hooks/ for reusable logic (like fetching data).

context/ for global state (favorites).

api/ for all API calls.

I separated things this way to make it easier to find and change parts later.

2. Problem Solving

2.1 What was challenging about this task?
The hardest part was handling the search and category logic together without refetching data too many times. Also making sure the app doesn’t break when the API returns null or empty arrays. I had to test those cases a few times.

2.2 How did you debug any issues?
Mostly with console.log() to see what the API returned. I also checked the network tab in the browser dev tools to see the actual API requests and responses. Sometimes I printed out the state values to make sure they were updating correctly.

2.3 What would you add if you had more time?
I’d add better styling (maybe Tailwind or CSS modules), a debounce for the search input so it doesn’t fetch on every keypress, and maybe a favorites page to show all saved meals in one place. Also, showing a nice message when there are no favorites yet.
