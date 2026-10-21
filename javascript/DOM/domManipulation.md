customDiv = document.createElement('div')

<div>​</div>​
customDiv.style.height = "600px"
'600px'
customDiv.style.width = "1000px"
'1000px'
document.body.appendChild(customDiv)
<div style=​"height:​ 600px;​ width:​ 1000px;​ background-color:​ rgb(40, 44, 52)​;​">​</div>​
customDiv.style.backgroundColor = "#282c34"
'#282c34'
heading = document.createElement('h1')
<h1>​</h1>​
heading.textContent = "Welcome To My Dynamic WebPage!"
'Welcome To My Dynamic WebPage!'
heading.style.color = "white"
'white'
heading.style.text
undefined
heading.style.textAlign = "center"
'center'
document.body.appendChild(heading)
<h1 style=​"color:​ white;​ text-align:​ center;​">​Welcome To My Dynamic WebPage!​</h1>​
customDiv.appendChild(heading)
<h1 style=​"color:​ white;​ text-align:​ center;​ margin-top:​ 10px;​">​Welcome To My Dynamic WebPage!​</h1>​
heading.style.marginTop = "10px"
'10px'
para = document.createElement('p)
VM1573:1 Uncaught SyntaxError: Invalid or unexpected token (at VM1573:1:31)
para = document.createElement('p')
<p>​</p>​
para.textContent = "This page is fully created using JAVASCRIPT in the console!"
'This page is fully created using JAVASCRIPT in the console!'
customDiv.appendChild(para)
<p style=​"color:​ white;​ padding:​ 5px;​">​This page is fully created using JAVASCRIPT in the console!​</p>​
para.style.color = "white"
'white'
para.style.padding = "5px"
'5px'
heading.style.paddingTop = "10px"
'10px'
para.style.color = "#ddd"
'#ddd'
para.style.fontSize = "1.2rem"
'1.2rem'
para.style.textAlign = "center"
'center'
button = document.createElement('button')
<button>​</button>​
customDiv.appendChild(button)
<button style=​"display:​ block;​">​</button>​
button.textContent = 'Click Me'
'Click Me'
button.style.display = "block"
'block'
button.style.margin = "20px auto"
'20px auto'
button.style.padding = "12px 24px"
'12px 24px'
button.style.fontSize = "1.2rem"
'1.2rem'
button.style.border = "none"
'none'
button.style.borderRadius = "8px"
'8px'
button.style.cursor = "pointer"
'pointer'
button.style.backgroundColor = "#ff9800"
'#ff9800'
button.style.color = "white"
'white'
button.style.boxShadow = "2px 2px 10px rgba(0 0 0 0.3)"
'2px 2px 10px rgba(0 0 0 0.3)'
button.addEventListener("mouseover", function() {button.style.backgroundColor = "#e65100"})
undefined
button.addEventListener("mouseout", function() {button.style.backgroundColor = "#ff9800"})
undefined
card = document.createElement("div")
<div>​</div>​
card.style.width = "300px"
'300px'
card.style.margin = "20px auto"
'20px auto'
card.style.padding = "20px"
'20px'
card.style.borderRadius = "12px"
'12px'
card.style.boxShadow = "0 5px 15px rgba(0 0 0 0.2)
VM3412:1 Uncaught SyntaxError: Invalid or unexpected token (at VM3412:1:24)
card.style.boxShadow = "0 5px 15px rgba(0 0 0 0.2)"
'0 5px 15px rgba(0 0 0 0.2)'
card.style.backgroundColor = "#333"
'#333'
card.style.textAlign = "center"
'center'
document.body.appendChild(card)
<div style=​"width:​ 300px;​ margin:​ 20px auto;​ padding:​ 20px;​ border-radius:​ 12px;​ background-color:​ rgb(51, 51, 51)​;​ text-align:​ center;​">​</div>​
customDiv.appendChild(card)
<div style=​"width:​ 300px;​ margin:​ 20px auto;​ padding:​ 20px;​ border-radius:​ 12px;​ background-color:​ rgb(51, 51, 51)​;​ text-align:​ center;​">​</div>​
cardTitle = document.createElement("h2")
<h2>​</h2>​
cardTitle.textContent = "JavaScript Rocks!"
'JavaScript Rocks!'
cardTitle.style.color = "white"
'white'
cardTitle.style.fontSize "1rem"
VM3994:1 Uncaught SyntaxError: Unexpected string (at VM3994:1:26)
cardTitle.style.fontSize = "1rem"
'1rem'
cardTitle.style.marginTop = "10px"
'10px'
card.appendChild(cardTitle)
<h2 style=​"color:​ white;​ font-size:​ 1rem;​ margin-top:​ 10px;​">​JavaScript Rocks!​</h2>​
document.body.style.display = "flex"
'flex'
document.body.style.flexDirection = "column"
'column'
document.body.style.alignItems = "center"
'center'
document.body.style.justifyContent = "center"
'center'
document.body.style.height = "100vh"
'100vh'
document.body.style.fontFamily = "Arial, sans-serif"
'Arial, sans-serif'
img = document.createElement("img")
<img>​
img.src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-wallpaper-spring-flowers-mountain-sunset-free-image.jpg?w=1024&quality=50"
about:blank:1 Loading the image 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-wallpaper-spring-flowers-mountain-sunset-free-image.jpg?w=1024&quality=50' violates the following Content Security Policy directive: "img-src chrome://resources chrome://theme chrome://image chrome://favicon2 chrome://app-icon chrome://extension-icon chrome://fileicon blob: data: 'self'". The action has been blocked.
'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-wallpaper-spring-flowers-mountain-sunset-free-image.jpg?w=1024&quality=50'
img.src = "file:///D:/PROJECT/MERN/javascript/assets"
about:blank:1 Not allowed to load local resource: file:///D:/PROJECT/MERN/javascript/assets
'file:///D:/PROJECT/MERN/javascript/assets'
img.src = "file:///D:/PROJECT/MERN/javascript/assets/valley.jpg"
about:blank:1 Not allowed to load local resource: file:///D:/PROJECT/MERN/javascript/assets/valley.jpg
'file:///D:/PROJECT/MERN/javascript/assets/valley.jpg'
img.style.width = "300px"
'300px'
customDiv.appendChild(img)
<img src=​"file:​/​/​/​D:​/​PROJECT/​MERN/​javascript/​assets/​valley.jpg" style=​"width:​ 300px;​ text-align:​ center;​">​
img.style.textAlign = "center"
'center'
img.style.height = "100px"
'100px'
img.style.objectFit = "cover"
'cover'
img.style.display = "block"
'block'
img.style.margin = "0 auto"
'0 auto'
imput = document.createElement("input")
<input>​
input.type = "file"
VM5602:1 Uncaught ReferenceError: input is not defined
    at <anonymous>:1:1
(anonymous) @ VM5602:1
imput.type = "file"
'file'
imput.accept = "image/*"
'image/*'
customDiv.appendChild(imput)
<input type=​"file" accept=​"image/​*">​
imput.onchange = function() { let file = new FileReader();
reader.onload = function() { img.src = reader.result}  reader.readAsDataURL(file)                          }
VM6032:2 Uncaught SyntaxError: Unexpected identifier 'reader' (at VM6032:2:56)
imput.onchange = function() { 
let file = input.files[0]; 
if(!file) return;
let reader = new FileReader();
reader.onload = function() { 
img.src = reader.result }  reader.readAsDataURL(file)                   }
VM6109:6 Uncaught SyntaxError: Unexpected identifier 'reader' (at VM6109:6:28)
imput.onchange = function() { 
let file = input.files[0]; 
if(!file) return;
let reader = new FileReader();
reader.onload = function() { 
img.src = reader.result; }  reader.readAsDataURL(file)                   }
VM6115:6 Uncaught SyntaxError: Unexpected identifier 'reader' (at VM6115:6:29)
input.onchange = function () {
  let file = imput.files[0];

if (!file) return;

let reader = new FileReader();

reader.onload = function () {
img.src = reader.result;
};

reader.readAsDataURL(file);
};
VM6123:1 Uncaught ReferenceError: input is not defined
at <anonymous>:1:1
(anonymous) @ VM6123:1
imput.onchange = function () {
let file = imput.files[0];

if (!file) return;

let reader = new FileReader();

reader.onload = function () {
img.src = reader.result;
};

reader.readAsDataURL(file);
};
ƒ () {
let file = imput.files[0];

if (!file) return;

let reader = new FileReader();

reader.onload = function () {
img.src = reader.result;
};

reader.readAsDataURL(file);
}
img.style.width = 500px
VM6240:1 Uncaught SyntaxError: Invalid or unexpected token (at VM6240:1:19)
img.style.width = "500px"
'500px'
img.style.height = "200px"
'200px'
img.style.height = "250px"
'250px'
imput.style.marginLeft = "25px"
'25px'
imput.style.marginLeft = "50px"
'50px'
imput.style.marginLeft = "100px"
'100px'
