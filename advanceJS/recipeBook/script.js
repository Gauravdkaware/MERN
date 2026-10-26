function fetchRecipe() {
  fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken&utm_source=chatgpt.com",
  )
    .then((res) => res.json())
    .then((result) => {
      renderRecipe(result.meals);
    })
    .catch((error) => console.log(error));
}
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
              </div>
            </div>
          </div>
        `;
  });
}
