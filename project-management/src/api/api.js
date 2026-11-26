import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://674e84f1635bad45618eebc1.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

// // fetch('', {
// //     method:""
// // })
// // .then(res=>res.json())
// // .then(data=>)

// axios.get("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects");
// axios.get("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/12");
// axios.post("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects", {
//   id: "100",
//   ProjectName: "Search Engine Feature",
//   Details: "Elastic search setup",
//   startDate: "2026-02-10",
//   EndDate: "2026-03-20",
//   priority: "Medium",
//   Department: "Backend",
//   status: "In-Progress",
// });
// axios.delete("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/100");
// axios.put("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/100", {
//   status: "Completed",
//   startDate: "2027-02-10",
//   EndDate: "2027-03-20",
// });
// axios.patch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/100", {
//   status: "Completed",
// });
