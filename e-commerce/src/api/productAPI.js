import axiosInstance from "./api";
export async function getProducts() {
  const res = await axiosInstance.get("/products");

  if (res) {
    return res.data;
  } else {
    console.log("Error while fetching API ");
  }
}
