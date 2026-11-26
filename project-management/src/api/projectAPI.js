import axiosInstance from "./api";
export async function getProjects() {
  const res = await axiosInstance.get("/projects");

  if (res) {
    return res.data;
  } else {
    console.log("Error while fetching API ");
  }
}
