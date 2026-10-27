function fetchRecipe() {
  let spinner = document.querySelector(".customSpinner");
  let container = document.querySelector(".container");

  fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken&utm_source=chatgpt.com",
  )
    .then((res) => res.json())
    .then((result) => {
      renderRecipe(result.meals);
      container.style.display = "block";
    })
    .catch((error) => console.log(error))
    .finally(() => {
      spinner.style.display = "none";
    });
}
// setTimeout(() => {
//   setInterval(fetchRecipe, 1000);
// }, 1000);
fetchRecipe();

function renderRecipe(meals) {
  //   let table = document.getElementById("mealTable");

  //   meals.forEach((meal) => {
  //     let row = document.createElement("tr");
  //     row.innerHTML = `
  //         <td>
  //             <img src="${meal.strMealThumb}" width="100">
  //         </td>
  //         <td>${meal.strMeal}</td>
  //     `;
  //     table.appendChild(row);
  //   });
  let container = document.querySelector("#mealCards");
  meals.forEach((meal) => {
    container.innerHTML += `
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
