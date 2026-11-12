const employees = [
  {
    name: "John",
    tasks: [
      { title: "Task 1", completed: true },
      { title: "Task 2", completed: true },
    ],
  },
  {
    name: "Jane",
    tasks: [
      { title: "Task 1", completed: true },
      { title: "Task 2", completed: false },
    ],
  },
];

function countCompletedTask() {
  const result = employees.map((emp) => ({
    name: emp.name,
    count: emp.tasks.filter((task) => task.completed).length,
  }));
  console.log(result);
}
// countCompletedTask();

function highestCompletionRate() {
  let temp = 0;
  let obj = {};
  let employeeName = "None";
  const highest = employees.map((emp) => {
    const count = emp.tasks.filter((task) => task.completed).length;
    if (count > temp) {
      ((obj.name = emp.name), (obj.completed = count));
      temp = count;
    }
    if (emp.tasks.length === count) {
      employeeName = emp.name;
    }
  });
  console.log(obj);
  console.log("Completed all tasks : " + employeeName);
}
// highestCompletionRate();

const orders = [
  {
    id: 1,
    customer: "Amit",
    items: [
      { name: "Phone", price: 20000 },
      { name: "Charger", price: 1000 },
    ],
  },
  {
    id: 2,
    customer: "Neha",
    items: [{ name: "Laptop", price: 50000 }],
  },
];

function orderValue() {
  const result = orders.map((order) => ({
    id: order.id,
    customer: order.customer,
    total: order.items.reduce((total, item) => total + item.price, 0),
  }));
  console.log(result);
}
// orderValue();

function totalRevenue() {
  let obj = {};
  let temp = 0;
  const result = orders.reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => {
      if (item.price > temp) {
        ((obj.name = item.name), (obj.price = item.price));
        temp = item.price;
      }
      return sum + item.price;
    }, 0);
    return total + orderTotal;
  }, 0);
  console.log("total Revenue : " + result);
  console.log("Expensive Product : " + JSON.stringify(obj));
}
totalRevenue();
