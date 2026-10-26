const myPromise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("SUCCESS");
  } else {
    reject("FAILED");
  }
});
myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const myPromise2 = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("Data fetch successfully");
  } else {
    reject("Error while fetching data");
  }
});
myPromise2
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const pizzaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isAvailable = false;
    if (isAvailable) {
      resolve("Pizza Delivered");
    } else {
      reject("Shop Closed");
    }
  }, 2000);
});
pizzaPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
