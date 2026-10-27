let spinner = document.querySelector(".customSpinner");
let recipeContainer = document.querySelector(".container");
let mealContainer = document.querySelector("#mealCards");
let meals = [];

function hideSpinner() {
  spinner.style.display = "none";
}

// function fetchRecipe() {
//   fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
//     .then((res) => res.json())
//     .then((result) => {
//       // renderRecipe(result.meals);
//       meals = result.meals || [];
//       showCardView();
//       recipeContainer.style.display = "block";
//     })
//     .catch((error) => console.log(error))
//     .finally(() => {
//       hideSpinner();
//     });
// }
async function fetchRecipe() {
  try {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken",
    );
    let result = await res.json();
    // renderRecipe(result.meals);
    meals = result.meals || [];
    showCardView();
    recipeContainer.style.display = "block";
  } catch (error) {
    console.log(error);
  } finally {
    hideSpinner();
  }
}
fetchRecipe();

function renderRecipe(meals) {
  meals.forEach((meal) => {
    mealContainer.innerHTML += `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
              <img src="${meal.strMealThumb}"
                   class="card-img-top"
                   alt="${meal.strMeal}"
                   style="height: 200px; object-fit: cover;">

              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  Category: ${meal.strCategory || "Not available"}
                </p>
                <p class="card-text">
                  Area: ${meal.strArea || "Not available"}
                </p>
                <button class="btn btn-sm btn-primary" onclick="showRecipeDetails(${meal.idMeal})">More Info</button>
                <a href="${meal.strYoutube || "#"}" target="_blank" class="btn btn-sm btn-primary">Recipe</a>
              </div>
            </div>
          </div>
        `;
  });
}

async function showRecipeDetails(id) {
  let recipeBody = document.querySelector("#recipeBody");
  let recipeTitle = document.querySelector("#recipeTitle");

  recipeTitle.textContent = "Loading Recipe Details...";
  recipeBody.innerHTML = `
    <div class="text-center p-4">
      <div class="spinner-border" role="status"></div>
      <p class="mt-2">Loading recipe...</p>
    </div>
  `;

  bootstrap.Modal.getOrCreateInstance(
    document.querySelector("#recipeModal"),
  ).show();

  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    if (!res.ok) {
      throw new error("Failed to fetch recipe details");
    }
    let result = await res.json();
    let meal = result.meals?.[0];

    if (!meal) {
      throw new Error("Recipe not found");
    }
    recipeTitle.textContent = meal.strMeal;

    recipeBody.innerHTML = `
      <img src="${meal.strMealThumb}" class="img-fluid rounded mb-3"
           alt="${meal.strMeal}">

      <p><strong>Category:</strong> ${meal.strCategory || "Not available"}</p>
      <p><strong>Area:</strong> ${meal.strArea || "Not available"}</p>
      <h6>Instructions</h6>
      <p>${meal.strInstructions || "Not available"}</p>
    `;
  } catch {
    recipeTitle.textContent = "Error";
    recipeBody.textContent = error.message;
  }
}

function showCardView() {
  mealContainer.innerHTML = meals
    .map(
      (meal) => `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
              <img src="${meal.strMealThumb}"
                   class="card-img-top"
                   alt="${meal.strMeal}"
                   style="height: 200px; object-fit: cover;">

              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  Category: ${meal.strCategory || "Not available"}
                </p>
                <p class="card-text">
                  Area: ${meal.strArea || "Not available"}
                </p>
                <button class="btn btn-sm btn-primary" onclick="showRecipeDetails(${meal.idMeal})">More Info</button>
                <a href="${meal.strYoutube || "#"}" target="_blank" class="btn btn-sm btn-primary">Recipe</a>
              </div>
            </div>
          </div>
      `,
    )
    .join("");
}

function showTableView() {
  mealContainer.innerHTML = `
    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Image</th>
              <th>Recipe Name</th>
              <th>Category</th>
              <th>Area</th>
              <th>More Info</th>
              <th>Recipe</th>
            </tr>
          </thead>
          <tbody>
            ${meals
              .map(
                (meal) => `
                  <tr>
                    <td>
                      <img src="${meal.strMealThumb}" class="d-block mx-auto"
                           width="70" alt="${meal.strMeal}">
                    </td>
                    <td>${meal.strMeal}</td>
                    <td>${meal.strCategory || "N/A"}</td>
                    <td>${meal.strArea || "N/A"}</td>
                    <td><button class="btn btn-sm btn-primary" onclick="showRecipeDetails(${meal.idMeal})"
                      >More Info</button>
                    </td>
                    <td><a href="${meal.strYoutube || "#"}" target="_blank" class="btn btn-sm btn-primary"
                      >Recipe</a>
                    </td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
