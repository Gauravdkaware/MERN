let products = [
  {
    image: "./assets/mobile.jpg",
    name: "iPhone 17",
    category: "Mobile",
    price: 79999,
    stock: 10,
  },
  {
    image: "./assets/laptop.jpg",
    name: "HP Laptop",
    category: "Laptop",
    price: 65000,
    stock: 5,
  },
  {
    image: "./assets/headphone.jpg",
    name: "Sony Headphones",
    category: "Audio",
    price: 4999,
    stock: 20,
  },
];
let editIndex = -1;

let storedProducts = localStorage.getItem("products");
if (storedProducts === null) {
  localStorage.setItem("products", JSON.stringify(products));
} else {
  products = JSON.parse(storedProducts);
}
displayProducts();

function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach((product, index) => {
    productList.innerHTML += ` 
    <div class="col-12 col-sm-6 col-md-4 col-lg-3"> 
        <div class="card product-card h-100"> 
            <div class="card-img-container">
                <img 
                    src="${product.image}" 
                    class="card-img-top" 
                    alt="${product.name}" 
                > 
            </div>
            <div class="card-body"> 
                <h5 class="card-title"> 
                    ${product.name} 
                </h5> 
                <p class="card-text mb-1"> 
                    Category: ${product.category} 
                </p> 
                <p class="card-text mb-1 product-price"> 
                    Price: ₹${product.price} 
                </p> 
                <p class="card-text"> 
                    Stock: ${product.stock} 
                </p> 
                <button class="btn btn-edit" 
                    onclick="editProduct(${index})" > Edit 
                </button> 
                <button class="btn btn-delete" 
                    onclick="deleteProduct(${index})" > Delete 
                </button> 
            </div> 
        </div> 
    </div> `;
  });
}

function openAddModal() {
  editIndex = -1;
  document.getElementById("modalTitle").textContent = "Add Product";
  document.getElementById("saveProductBtn").textContent = "Add Product";
  clearForm();
}

function saveProduct() {
  let image = document.getElementById("imageInput").value;
  let name = document.getElementById("nameInput").value;
  let category = document.getElementById("categoryInput").value;
  let price = Number(document.getElementById("priceInput").value);
  let stock = Number(document.getElementById("stockInput").value);
  let product = {
    image: image,
    name: name,
    category: category,
    price: price,
    stock: stock,
  };
  if (editIndex === -1) {
    products.push(product);
  } else {
    products[editIndex] = product;
  }
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
  clearForm();
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("exampleModal"),
  );
  modal.hide();
}

function editProduct(index) {
  editIndex = index;
  let product = products[index];
  document.getElementById("modalTitle").textContent = "Edit Product";
  document.getElementById("saveProductBtn").textContent = "Update Product";
  document.getElementById("imageInput").value = product.image;
  document.getElementById("nameInput").value = product.name;
  document.getElementById("categoryInput").value = product.category;
  document.getElementById("priceInput").value = product.price;
  document.getElementById("stockInput").value = product.stock;
  let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
}

function clearForm() {
  document.getElementById("imageInput").value = "";
  document.getElementById("nameInput").value = "";
  document.getElementById("categoryInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("stockInput").value = "";
}
